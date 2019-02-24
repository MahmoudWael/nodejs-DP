console.log('---- Parallel execution----');

function TimeOuter(number, callback) { //the Aysnc Task
    setTimeout((err) => {
        if (err) return callback(err);
        console.log(number);
        callback();
    }, Math.random() * 10000);
}

function AysncJobs(tasks, callback) { //iterate asynchronously in sequence over list of tasks
    if (tasks.length == 0) {
        process.nextTick(callback);
    }
    let completed = 0,
        hasErrors = false;

    function done(err) {
        if (err) {
            hasErrors = true;
            return callback(err);
        }
        if (++completed == tasks.length && !hasErrors) {
            return callback();
        }
    }
    tasks.forEach(element => {
        TimeOuter(element, done);
    });
}

var taskList = [1, 3, 4, 56, 67, 78, 4];

AysncJobs(taskList, err => {
    if (err) {
        console.log('Error!');
    } else {
        console.log('Tasks completed!');
    }
});