process.stdin
    .on('readable', () => {
        console.log('new data available');
        let chunk;
        while ((chunk = process.stdin.read()) !== null) {
            console.log(`chunk read: (${chunk.length})  "${chunk.toString()}"`);
        }
    })
    .on('end', () => process.stdout.write('End of stream'));
    