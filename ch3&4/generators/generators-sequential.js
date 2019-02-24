function* generatorIterator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}

const iterator = generatorIterator(['Apple', 'Orange', 'Banana', 'Watermelon']);
let currentItem = iterator.next();

while (!currentItem.done) {
    console.log(currentItem.value);
    currentItem = iterator.next();
}



function* twoWayGenerator() {
    const what = yield null;
    console.log('Hello ' + what);
}

const twoWay = twoWayGenerator();
twoWay.next();
twoWay.next('World');