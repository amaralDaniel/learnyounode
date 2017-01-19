<<<<<<< HEAD
//get input
//perform http response
//write callback function
//on "data" output data to user
//on "error" report error
//on "end" end
=======
//require bl
//get argument
//perform GET
//collect data on("data")
//Note that you will probably need to data.toString() to convert from a Buffer.
//on("end") print the info

>>>>>>> 651d4d039f3dc9e09e2520a73bdfe8d1b4e3eb54
var bl = require('bl');
var http = require('http');

function output_function(response){
  response.setEncoding('utf8');
  response.pipe(bl(function (err, data) {
<<<<<<< HEAD
    if(err){
      return console.log(err);
    }
=======
>>>>>>> 651d4d039f3dc9e09e2520a73bdfe8d1b4e3eb54
    console.log(data.length);
    console.log(data.toString()); }));
}

http.get(process.argv[2],output_function);
<<<<<<< HEAD

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
=======
>>>>>>> 651d4d039f3dc9e09e2520a73bdfe8d1b4e3eb54
