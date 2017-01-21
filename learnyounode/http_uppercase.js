//require http
//http.createServer() => create http server
//put server listening
//get data from server
//uppercase it
//responde with uppercase data

var http = require('http');
var through2 = require('through2-map');

var server = http.createServer(function (request, response){

  request.pipe(through2(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(response);


});

server.listen(process.argv[2]);
