var fs = require('fs');

function count_lines(file){
  buff = fs.readFileSync(file);
  buff = buff.toString().split("\n");
  return buff.length -1;
}

var file = process.argv[2];
console.log(count_lines(file));
