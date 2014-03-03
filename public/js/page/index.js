/**
 * Created by luoxinfang on 13-12-6.
 */
'use strict';
define(function (require) {
  var _ = require('underscore');
  var Player = require('../module/player');
  var Page = require('../module/page');
  var Class = require('class');
  var page = new Page;
  var NavBar = require('../module/navbar');
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
      //show the page
      Menu.distributeLink(index);
    },
    distributeLink: function (index) {
      var that = this;
      switch (index) {
        case 1:
          require.async('../../inc/register.html', function (tpl) {
            page.showPage(tpl, '#register');

          });
          break;
        case 2:
          require.async('../../inc/login.html', function (tpl) {
            page.showPage(tpl, '#login');

          });
          break;
        case 3:
          require.async('../../inc/login.html', function (tpl) {
            page.showPage(tpl, '#settings');

          });
          break;
        default :
          require.async('../../inc/hall.html', function (tpl) {
            page.showPage(tpl, '#hall');
            new Player;
          });
      }

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
  new NavBar('#nav');
  setTimeout(function () {
    //$('#nav').children().last().trigger('click');
  },200)

});