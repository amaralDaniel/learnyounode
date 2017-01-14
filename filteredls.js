var fs = require('fs');
var path = require('path');


function print_list(error, list){
  if(error) return console.log(error);
  var ext = ".".concat(process.argv[3]);

  for(i=0;i<list.length;i++){
    if(path.extname(list[i])==ext)
      console.log(list[i]);
  }
}

fs.readdir(process.argv[2],print_list);
