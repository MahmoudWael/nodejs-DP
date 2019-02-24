"use strict";

module.exports.promisify = function (callbackBasedApi) {
  return function promisified() {
    const args = [].slice.call(arguments);
    return new Promise((resolve, reject) => {
      args.push((err, result) => {
        if (err) {
          return reject(err);
        }
        if (arguments.length <= 2) {
          resolve(result);
        } else {
          resolve([].slice.call(arguments, 1));
        }
      });
      console.log('args', args);
      callbackBasedApi.apply(null, args);
    });
  };
};

module.exports.MyPromisify = fn => (...args) => new Promise((resolve, reject) => {
  fn(...args, (err, value) => {
    if (err) {
      reject(err);
    } else {
      resolve(value);
    }
  });
});

module.exports.MyPromisifyXLSX = function (fn) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      fn(...args, function (err, value) {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  };
};