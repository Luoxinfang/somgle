/*
 * GET home page.
 */
module.exports = function(app){
  var App = require('./appInfo');
  app.get('/', function (req, res) {
    res.render('index', App);
  });
};