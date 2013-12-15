/**
 * Created by luoxinfang on 13-12-6.
 */
'use strict';
define(function (require, exports, module) {
  var Menu = {
    rotateDeg: 45,
    activeIndex: 0,
    $main: $('#main'),
    $list: $('.menu-list'),
    $logo: $('.menu .logo'),
    $items: $('.menu-list .item'),
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
      Menu.activeIndex=index;
      Menu.rotateDeg += gap * 90;
      Menu.$list.css('WebkitTransform', 'rotate(' + Menu.rotateDeg + 'deg)');
      $(this).addClass('active').siblings().removeClass('active');
      //show the content
      Menu.distributeLink(index);
    },
    distributeLink: function (index) {
      switch (index){
        case 0:
          this.showIndex();
          break;
        case 1:
          this.showReg();
          break;
        case 2:
          this.showLogin();
          break;
        case 3:
          this.showSettings();
          break;
      }
    },
    showIndex: function () {

    },
    showReg: function () {
      var tpl=require('../../inc/register.html');
      var _tpl = _.template(tpl);
      $('#main').html(_tpl);
    },
    showLogin:function(){

    },
    showSettings:function(){

    },
    bindEvent:function(){
      this.$logo.on('click', this.show);
      this.$items.on('click', this.rotateToTop);
    },
    init: function () {
      this.lastIndex = this.$items.length - 1;
      this.bindEvent();
    }
  };
  Menu.init();
});