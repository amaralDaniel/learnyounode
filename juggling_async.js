
//require bl
//get 3 arguments
//perform GET
//collect all of the data
//Note that you will probably need to data.toString() to convert from a Buffer.
//on("end") of ALL print the gathered info


var bl = require('bl');
var http = require('http');
var count = 2;

function output_function(response){
  response.setEncoding('utf8');
  var body = "";
  response.pipe(bl(function (err, data) {

    if(err){
      return console.log(err);
    }
    console.log(data.toString());
    count++;
    if(count<5)
      http.get(process.argv[count],output_function);
    else {
      return;
    }
  }));

}

http.get(process.argv[count],output_function);
