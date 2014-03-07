/**
 * Created by luoxinfang on 13-12-6.
 */
'use strict';
define(function (require) {
  var _ = require('underscore');
  var Class = require('class');
  var NavBar = require('../module/navbar');
  var Menu = require('../module/menu');
  new Menu;
  new NavBar('#nav');
});