/**
 * Created by luoxinfang on 14-1-14.
 * Page Class
 */
define(function (require, exports, module) {
  var Class = require('class');
  var Page = Class.extend({
    init: function (el) {
      this.$el = $(el);
      this.$main = $('#main') || $('.main');
    },
    showPage: function (tpl,title) {
      this.$main.html(tpl);
      title && history.pushState(title);
    }
  });
  module.exports = Page;
});