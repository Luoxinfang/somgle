/*
 * GET home page.
 */


module.exports = function(app){
  var App = {
    title: "Somgle",
    version: "0.0.1"
  };
  app.get('/', function (req, res) {
    res.render('index', { title: 'Somgle' });
  });
};