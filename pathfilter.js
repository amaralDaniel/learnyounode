//get input
//perform http request
//write callback function
//on "data" output data to user
//on "error" report error
//on "end" end

function output_function(response){
  response.on("data",function(data){
    console.log(data.setEnconding('utf8'));
  });
  response.on("error",function(error){
    console.log(error);
  });
  response.on("end",function(){
    console.log("End");
    return;
  });
}

http.get(process.argv[2],output_function);
