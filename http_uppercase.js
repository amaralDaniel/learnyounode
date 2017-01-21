//require http
//http.createServer() => create http server
//put server listening
//get data from server
//uppercase it
//responde with uppercase data

var http = require('http');
var through2 = require('through2-map');
var fs = require('fs');

var server = http.createServer(function (err,request, response){
  if(err) console.error(err);

  request.pipe(through2(function(data){
    return data.toString().toUpperCase();
  })).pipe(response);

});

server.listen(process.argv[2]);
