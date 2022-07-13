const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function readFiles() {
    const content1 = await readFile(`${__dirname}/sample.txt`, 'utf-8');
    const content2 = await readFile(`${__dirname}/sample2.txt`, 'utf-8');
    return content1 + ' ' + content2;
}

readFiles().then(result => console.log(result));