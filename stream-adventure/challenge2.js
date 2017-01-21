var fs = require('fs');

function challenge2(file){
  fs.createReadStream(file).pipe(process.stdout);
}

challenge2(process.argv[2]);
