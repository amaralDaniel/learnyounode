
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
  response.pipe(bl(function (err, data) {

    if(err){
      return console.log(err);
    }
    console.log(data.length);
    console.log(data.toString()); }));
}

http.get(process.argv[2],output_function);


    // Provided solution
    //
    //
    // var http = require('http')
    // var bl = require('bl')
    //
    // http.get(process.argv[2], function (response) {
    //   response.pipe(bl(function (err, data) {
    //     if (err) {
    //       return console.error(err)
    //     }
    //     data = data.toString()
    //     console.log(data.length)
    //     console.log(data)
    //   }))
    // })
