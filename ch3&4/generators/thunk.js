function doSomething(task, effort) {
    console.log('Started ' + task);
    var data, fn;                          
    setTimeout(function () {
        data = task + ' completed';
        if (fn) {
            fn(data);
        }
    }, effort);
    return function (cb) {
        //we have two scenarios 
        // 1- the task has completed and we have the data so we pass it to the callback
        if (data) {
            cb(data);
        } else {
            //2- the task has not completed yet so we assign the callback to fn in order to use it inside the setTimeout
            fn = cb;
        }
    }
}


let task1 = doSomething('task1', 2000);
let task2 = doSomething('task2', 1000);

//Task1 effort > Task2 but we can still use the response data from task1 in Task2 without blocking Task2 from starting 
task1(function (res) {
    console.log(res);
    task2(function (res) {
        console.log(res);
    });
});