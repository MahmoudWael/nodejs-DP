const Chance = require('chance');
const http = require('http');

const chnace = new Chance();

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    function generateMore() {
        while (chnace.bool({
                likelihood: 95
            })) {
            let shouldContinue = res.write(chnace.string({
                length: (16 * 1024) - 1
            }) + '\n');
            if (!shouldContinue) {
                console.log('BackPressure');
                return res.once('drain', generateMore);
            }
        }
        res.end('\nThe End...\n');
    }
    generateMore();
}).listen(8080, () => {
    console.log('listening on localhost:8080');
});