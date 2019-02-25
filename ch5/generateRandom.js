const RandomStream = require('./randomStream');

const randomStream = new RandomStream();

randomStream
    .on('readable', () => {
        let chunk;
        while ((chunk = randomStream.read()) != null) {
            console.log(`chunk: (${chunk.length}): "${chunk.toString()}"`);
        }
    }).on('end', () => {
        process.stdout.write('End of Stream');
    });