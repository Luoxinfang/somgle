/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
// all environments
app.set('port', process.env.PORT || 3000,null);
app.set('views', path.join(__dirname, 'views'),null);
app.set('view engine', 'ejs',null);
app.use(express.favicon('public/img/icon/somgle.ico'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.logger('dev'));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var routes={
  main:require('./routes'),
  admin:require('./routes/admin')
};
app.get('/',routes.main.index);

app.get('/admin',routes.admin.index);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
