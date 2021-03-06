/**
 * class Player
 * Created by luoxinfang on 14-1-3.
 */
'use strict';
define(function (require, exports, module) {
  require('jQuery');
  require('jPlayer');
  var _ = require('underscore');
  var Class = require('class');

  var Player = Class.extend({
    init: function () {
      this.$CD = $('#cd');
      this.$music = $('#music_player');
      this.$pickupArm = $('#pickup_arm');
      this.$playBtn = $('.jp-play');
      this.$pauseBtn = $('.jp-pause');
      this.$lyric = $('#lyric>ul');
      this.$tip = $('#lyric>#tip');
      this.songUrl = 'http://somgle-song.qiniudn.com/Shayne_Ward-Until_you.mp3';
      this.lyricUrl = 'http://somgle-lyric.qiniudn.com/Shayne_Ward-Until_you.lrc';
      this.lyrics = [];
      this.bindEvent();
      this.initPlayer();
    },
    rotateCD: function () {
      this.$CD.toggleClass('stop-rt');
      this.$pickupArm.toggleClass('pick');
    },
    initPlayer: function () {
      var that = this,
        url = this.songUrl;
      that.getLyrics();
      that.$music.jPlayer({
        ready: function () {
          $(this).jPlayer('setMedia', {
            mp3: url
          });
        },
        timeupdate: function (e) {
          var jPlayer = e.jPlayer,
            lyrics = that.lyrics,
            currentTime = Math.floor(jPlayer.status.currentTime);
          for (var i = 0, l = lyrics.length; i < l; i++) {
            var lineTime = lyrics[i][0].split(":"),
              startTime = Math.floor(lineTime[0]) * 60 + Math.floor(lineTime[1]);
            if (currentTime == startTime) {
              if (that.lineHeight * i >= that.lyricMiddle && that.lineHeight * (l - i ) >= that.lyricMiddle) {
                that.$lyric.css({
                  'top': -that.lineHeight * (i - Math.ceil(that.lyricMiddle / that.lineHeight)) + "px"
                });
              }
              that.$lyric.children('li').removeClass('now').eq(i).addClass('now');
            }
          }
        },
        ended: function () {
          that.rotateCD();
        },
        wmode: "window"
      });
    },
    getLyrics: function () {
      var that = this;
      $.get(this.lyricUrl, function (data) {
        that.showLyric(data.split('\n'));
      });
    },
    showLyric: function (lyrics) {
      var that = this,
        lyricsArr = [];
      for (var i = 0, j = 0, l = lyrics.length; i < l; i++) {
        var lyric = lyrics[i], title, author, album;
        if (lyric.split(']')[1]) {
          var lyricContent = lyric.substring(10);
          that.lyrics[j] = [];
          that.lyrics[j].push(lyric.substring(1, 8));
          that.lyrics[j].push(lyricContent);
          lyricsArr.push('<li class="ts2">' + lyricContent + '</li>');
          j++;
        }
        /*else {
         var t = lyric.replace(/\[|\]/g, '').split(':');
         switch (t[0]) {
         case 'ti':
         title = t[1];
         break;
         case 'ar':
         author = t[1];
         break;
         case 'al':
         album = t[1];
         break;
         }
         }*/
      }
      if (lyricsArr.length == 0) {
        this.$tip.html('歌词好像被我丢在路上了...');
      } else {
        this.$lyric.html(lyricsArr.join(''));
        this.lineHeight = that.$lyric.children('li').height();
        this.lyricMiddle = that.$lyric.parent().height() / 2 - this.lineHeight * 2;
      }
    },
    bindEvent: function () {
      var that = this;
      this.$playBtn.on('click', function () {
        that.rotateCD();
      });
      this.$pauseBtn.on('click', function () {
        that.rotateCD();
      });
    }

  });
  module.exports = Player;
});
