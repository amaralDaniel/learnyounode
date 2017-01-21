//require http
//http.createServer() => create http server
//put server listening

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
  var fileStream = fs.createReadStream(process.argv[3]);

  console.log(fileStream);
  fileStream.pipe(response);
});

server.listen(process.argv[2]);
