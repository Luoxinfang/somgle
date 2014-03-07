/**
 * Created by luoxinfang on 14-1-14.
 * Navbar Class
 */
'use strict';
define(function (require, exports, module) {
  var Class = require('class');
  var Page = require('./page');
  var page = new Page;
  var Navbar = Class.extend({
    init: function (el) {
      this.$el = $(el);
      this.bindEvent();
    },
    render: function ($el) {
      $el.addClass('active').siblings().removeClass('active');
    },
    distributeLink: function (e) {
      var $el = $(e.target),
        pageName = $el.data('page');
      this.render($el);
      switch (pageName) {
        case 'my-space':
          var tpl = require('../../inc/my_space.html');
          page.showPage(tpl, 'my_space');
          var bootstrap = require('bootstrap');
          break;
        default :

      }

    },
    bindEvent: function () {
      var that = this;
      this.$el.on('click', 'li', function (e) {
        that.distributeLink.call(that, e)
      });
    }
  });
  module.exports = Navbar;
});
