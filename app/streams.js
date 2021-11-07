const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'source', 'source2.txt')
const readableStream = fs.createReadStream(sourceFile, 'utf-8');
let data = '';

readableStream.on('data', chunk => data += chunk);
readableStream.on('end', () => console.log('End', data.length));
readableStream.on('error', (error) => console.log('Error', error.message));
