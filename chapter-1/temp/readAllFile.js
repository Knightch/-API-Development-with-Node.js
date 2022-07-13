const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const files = [
    'collectionOfFiles/file0.txt',
    'collectionOfFiles/file1.txt',
    'collectionOfFiles/file2.txt',
    'collectionOfFiles/file3.txt'
];

// map the files to the readFile function 
const promises = files.map(file => readFile(`${__dirname}/${file}`,'utf-8'))

// creating an array of promises
Promise.all(promises)
    .then(data => {
        data.forEach(text => console.log(text));
    })
    .catch(error => console.log('err: ', error))