var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://localhost:27017/api-testavel');

http.createServer(app).listen(8080, function(){
  console.log('Servidor iniciado...')
});