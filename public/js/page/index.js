/**
 * Created by luoxinfang on 13-12-6.
 */
'use strict';
define(function (require, exports, module) {
  var Menu = {
    rotateDeg: 45,
    activeIndex: 0,
    $main: $('#main'),
    $list: $('#menu .list'),
    $logo: $('#menu .logo'),
    $items: $('#menu .list .item'),
    show: function () {
      Menu.$list.toggleClass('show');
    },
    rotateToTop: function () {
      var index = Menu.$items.index(this);
      var gap = Menu.activeIndex - index;
      if (index == Menu.lastIndex && Menu.activeIndex == 0) {
        gap = 1
      } else if (index == 0 && Menu.activeIndex == Menu.lastIndex) {
        gap = -1;
      }
      Menu.activeIndex = index;
      Menu.rotateDeg += gap * 90;
      Menu.$list.css({'transform': 'rotate(' + Menu.rotateDeg + 'deg)'});
      $(this).addClass('active').siblings().removeClass('active');
      //show the content
      Menu.distributeLink(index);
    },
    distributeLink: function (index) {
      var title = '', tpl = '';
      switch (index) {
        case 1:
          title='register';
          tpl = require('../../inc/register.html');
          break;
        case 2:
          title='login';
          tpl = require('../../inc/login.html');
          break;
        case 3:
          title = 'settings';
          tpl='';
          break;
        default :
          title='hall';
          tpl = require('../../inc/hall.html');
          Player.init();
      }
      this.showPage('#'+title, tpl);
    },
    showPage: function (title, tpl) {
      title && history.pushState(title);
      this.$main.html(_.template(tpl));
    },
    bindEvent: function () {
      this.$logo.on('click', this.show);
      this.$items.on('click', this.rotateToTop);
    },
    init: function () {
      this.lastIndex = this.$items.length - 1;
      this.bindEvent();
      this.distributeLink();
    }
  };
  Menu.init();



  var Player={
    $player:$('#player'),
    songUrl:'http://somgle-song.qiniudn.com/Shayne_Ward-Until_you.mp3',

    play: function () {
      var that=this,
        url=this.songUrl;
      that.$player.jPlayer({
        ready:function(e){
          $(this).jPlayer('setMedia',{
            mp3:url
          })
        }
      });
    },



    init:function(){
      require('jPlayer');
      this.play();
    }
  };
});