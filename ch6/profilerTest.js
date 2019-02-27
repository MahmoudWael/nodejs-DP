const Profiler = require('./profiler');

function getRandomArray(len){
    const p = Profiler('Generating a ' + len +' item long array!');
    const arr = [];
    p.start();
    for (let i = 0; i < arr.length; i++) {
         arr.push(Math.random());
    }
    p.end();
}

getRandomArray(1e6);
console.log('done');