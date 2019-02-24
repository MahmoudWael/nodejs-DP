function TimeOuter(number, callback) { //the Aysnc Task
    setTimeout(() => callback(null, number), 2000);
}

function AysncJobs(numbers, callback) { //iterate asynchronously in sequence over list of tasks
    function iterate(index) {
        if (index == numbers.length) {
            return callback();
        }
        TimeOuter(numbers[index], (err, number) => {
            if (err) {
                return callback(err);
            }
            console.log(number);
            iterate(index + 1);
        });
    }
    iterate(0);
}

AysncJobs([1, 3, 4, 56, 67, 78, 4], err => {
    if (err) {
        console.log('Error!');
    } else {
        console.log('Tasks completed!');
    }
});