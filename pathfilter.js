var fs = require('fs');
var path = require('path');

module.exports = function pathfilter(dir, ext, callback){

  if(err)
    callback(err);
  var output = [];
  for(i=0;i<list.length;i++){
    if(path.extname(list[i])==ext){
      output.join(list[i]);
    }
  }
  callback(null,output);
};
