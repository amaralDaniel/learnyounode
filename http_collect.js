//require bl
//get argument
//perform GET
//collect data on("data")
//Note that you will probably need to data.toString() to convert from a Buffer.
//on("end") print the info

var bl = require('bl');
var http = require('http');

function output_function(response){
  response.setEncoding('utf8');
  //response.pipe(bl(function (err, data) { console.log(data) }))
  console.log("Get working");
  response.on("error",function(error){
    console.error("Error: "+error);
  });
  response.on("end",function(){return;});

}

http.get(process.argv[2],output_function);
