var $http = require('request-promise-json');
var co = require('co');

// ************* using promises *********************
// function bitcoinRate() {
//     $http.get('https://api.coindesk.com/v1/bpi/currentprice.json')
//         .then((res) => {
//             console.log(res);
//         });
// }
// bitcoinRate();

// ********** using generators with promises *************

// function* bitcoinRate() {
//     var result = yield $http.get('https://api.coindesk.com/v1/bpi/currentprice.json')
//     console.log(result);

// }

// var iter = bitcoinRate();
// var promise = iter.next().value;
// promise.then(onSuccess);

// function onSuccess(result) {
//     var nextItem = iter.next(result);
// }


// ******* with Co ********

function* bitcoinRate() {
    var result = yield $http.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    console.log(result);
}

co(bitcoinRate());