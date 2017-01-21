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

  if(url.pathname == '/api/unixtime'){
    response.writeHead(200,{'Content-Type':'/api/unixtime'});
    response.end( JSON.stringify({
      "unixtime": date.getTime()
    }));
  }
});

server.listen(process.argv[2]);


// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }
//
// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
