/**
 * Created by luoxinfang on 14-3-7.
 */
define(function (require, exports, module) {
  var Class = require('class');
  var Player = require('./player');
  var Page = require('./page');
  module.exports = Class.extend({
    init: function () {
      this.rotateDeg = 45;
      this.activeIndex = 0;
      this.$menu = $('#menu');
      this.$list = this.$menu.find('.list');
      this.$logo = this.$menu.find('.logo');
      this.$item = this.$menu.find('.item');
      this.lastIndex = this.$item.length - 1;
      this.bindEvent();
      this.distributeLink();
    },
    show: function () {
      this.$list.toggleClass('show');
    },
    rotateToTop: function (e) {
      var $tar = $(e.target.parentNode),
        index = this.$item.index($tar),
        gap = this.activeIndex - index;
      if (index == this.lastIndex && this.activeIndex == 0) {
        gap = 1
      } else if (index == 0 && this.activeIndex == this.lastIndex) {
        gap = -1;
      }
      this.activeIndex = index;
      this.rotateDeg += gap * 90;
      this.$list.css({'transform': 'rotate(' + this.rotateDeg + 'deg)'});
      $tar.addClass('active').siblings().removeClass('active');
      this.distributeLink(index);//show the page
    },
    distributeLink: function (index) {
      var page = new Page;
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
      this.$logo.on('click', this.show.bind(this));
      this.$item.on('click', this.rotateToTop.bind(this));
    }
  });
});