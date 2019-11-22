var testFolder = './data'; //'data'와 같다 
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})
