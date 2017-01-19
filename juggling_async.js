
//require bl
//get 3 arguments
//perform GET
//collect all of the data
//Note that you will probably need to data.toString() to convert from a Buffer.
//on("end") of ALL print the gathered info


var bl = require('bl');
var http = require('http');

function output_function(response){
  response.setEncoding('utf8');

  response.pipe(bl(function (err, data) {

    if(err){
      return console.log(err);
    }

    console.log(data.toString());
  }));
}

http.get(process.argv[2],output_function);
http.get(process.argv[3],output_function);
http.get(process.argv[4],output_function);
