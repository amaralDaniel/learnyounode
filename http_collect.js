//get input
//perform http response
//write callback function
//on "data" output data to user
//on "error" report error
//on "end" end
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
