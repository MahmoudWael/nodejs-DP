const stream = require('stream');
const Chance = require('chance');


const chance = new Chance();

class RandomStream extends stream.Readable {
    constructor(options) {
        super(options);
    }
    _read(size) {
        let chunk = chance.string();
        this.push(chunk, 'utf8');
        if (chance.bool({
                likelihood: 5
            })) {
            this.push(null);
        }
    }
}

module.exports = RandomStream;