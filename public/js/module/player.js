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
      this.$player = $('#player');
      this.$cdPlayer = $('#cd_player');
      this.songUrl = 'http://somgle-song.qiniudn.com/Shayne_Ward-Until_you.mp3';
      this.bindEvent();
      this.initPlayer();
    },
    bindEvent: function () {
      //this.$cdPlayer.on('click', '.play', this.play);
      this.$cdPlayer.on('click', '.stop', this.stop);
    },
    initPlayer: function () {
      this.$player.jPlayer({
        supplied: "mp3,m4a,oga,webma",
        wmode: "window",
        preload: 'metadata',
        volume: 0.5,
        muted: false,
        cssSelectorAncestor: '#cd_player',
        cssSelector: {
          play: '.play',
          pause: '.pause',
          stop: '.stop',
          seekBar: '.buffer',
          playBar: '.progress',
          mute: '.volume_on',
          unmute: '.muted',
          volumeBar: '.volume-bar',
          volumeBarValue: '.volume-value',
          volumeMax: '.volume-max',
          repeat: '.repeat-on',
          repeatOff: '.repeat-off',
          currentTime: '#player_duration',
          duration: '#player_elapsed'

        },
        errorAlerts: false,
        warningAlerts: false

      });
    },
    play: function () {
      var that = this,
        url = this.songUrl;
      that.$player.jPlayer({
        ready: function () {
          $(this).jPlayer('setMedia', {
            mp3: url
          });
        }
      });
    }
  });
  module.exports = Player;
});
