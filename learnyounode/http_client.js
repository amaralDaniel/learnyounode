//get input
//perform http response
//write callback function
//on "data" output data to user
//on "error" report error
//on "end" end
var http = require('http');


function output_function(response){
  response.setEncoding('utf8');
  response.on("data",function(data){
    console.log(data);
  });
  response.on("error",function(error){
    console.error("Error: "+error);
  });
  response.on("end",function(){return;});

}



http.get(process.argv[2],output_function);
