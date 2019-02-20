const utilities = require('./utilities');
const path = require('path');
const fs = require('fs');
const readFile = utilities.promisify(fs.readFile);
const MyreadFile = utilities.MyPromisifyXLSX(fs.readFile);
const writeFile = utilities.promisify(fs.writeFile);


MyreadFile(path.join(__dirname + '/utilities.js'), 'utf8').then(data => {
    // console.log(data);
}).catch(err => {
    console.log('Error! ', err);
});

