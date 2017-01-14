var mymodule = require('./pathfilter');
var fs = require('fs');

function to_print(err, data){
  if(err){
    console.log(err);
    return;
  }
  for(i=0;i<data.length;i++){
    console.log(data[i]);
  }
  return;
}

fs.readdir(process.argv[2],process.argv[3],process.argv[4],mymodule);
