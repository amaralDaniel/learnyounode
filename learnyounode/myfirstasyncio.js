var fs = require('fs');


function count_lines(error, file){
  if(error) return console.error(error);
  var lines = file.toString().split("\n").length - 1;
  console.log(lines);
}

var buff = fs.readFile(process.argv[2], count_lines);
