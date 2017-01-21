//require http
//GET request to path /api/parsetime
//get query string
//response in json
//response in epoch time

var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
  url = url.parse(request.url,true);
  //console.log(url);

  if(url.pathname == '/api/parsetime'){
    query = url.query;

    date = new Date(query['iso']);
    response.writeHead(200,{'Content-Type':'/api/parsetime'});
    response.end( JSON.stringify({

       "hour":date.getHours(),
       "minute":date.getMinutes(),
       "second":date.getSeconds()
    }));
  }

  // if(url.pathname == '/api/unixtime'){
  //   response.writeHead(200,{'Content-Type':'/api/unixtime'});
  //   response.end( JSON.stringify({"unixtime": new Date().getTime()}));
  // }




});

server.listen(process.argv[2]);
