 // reading text from sample.txt file
 const fs = require('fs');
 let file = `${__dirname}/sample.txt`;
 const callback = (err, data) => {
     if (err) throw err;
     console.log(data);
 };
 fs.readFile(file, 'utf8', callback);
 console.log('Print out last!');