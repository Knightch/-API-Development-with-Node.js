const math = require('./math');

console.log("addition of two numbers  "+math.add(40,45));
console.log("subtraction of two numbers  "+math.sub(40,45));
console.log("division of two numbers  "+math.div(40,45));
console.log("multipication of two numbers  "+math.multi(40,45));

// reading text from sample.txt file
const fs = require('fs');
let file = `${__dirname}/temp/sample.txt`;
const callback = (err, data) => {
    if (err) throw err;
    console.log(data);
};
fs.readFile(file, 'utf8', callback);
console.log('Print out last!');