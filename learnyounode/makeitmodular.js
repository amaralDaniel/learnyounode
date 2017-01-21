var module = require('./mymodule');
var dir = process.argv[2];
var ext = process.argv[3];

var callback = function(err, list){
  if(err) throw(err);

    list.forEach(function (file){
      console.log(file);
    });
};

module(dir,ext,callback);
