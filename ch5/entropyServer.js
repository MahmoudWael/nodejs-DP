const Chance = require('chance');
const http = require('http');

const chnace = new Chance();

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    while (chnace.bool({
            likelihood: 95
        })) {
        res.write(chnace.string() + '\n');
    }
    res.end('\nThe End...\n');
    res.on('finish', () => {
        console.log('All data sent');
    });
}).listen(8080, () => {
    console.log('listening on localhost:8080');
});