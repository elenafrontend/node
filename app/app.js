const fs = require('fs');
const path = require('path');

// task 1 - читать файл
// way 1 - асинхронный
fs.readFile('text.txt', 'utf-8', (err, data) => {
    console.log(`\nReading async:\n${data}`);
});

// way 2 - синхронный
let text = fs.readFileSync('text2.txt', 'utf-8');
console.log(`Reading sync:\n${text}`);
console.log('==================\n')


// task 2 - читать из директории

fs.readdir('folder', (err, data) => {
    console.log('Reading directory: ', data);
    data.forEach(file => {
        // выводим файл
        console.log('\nDirectory element: ', file);
        // разрешение файла
        console.log('Directory element extension: ' + path.extname(file))
        // file info
        console.log('Directory element info, size: ', fs.statSync('folder/' + file).size + 'B');
    })
});

// task 3 - записывать в файл
fs.writeFile('new.txt', 'Hello from Node', (err) => {
    if (err) console.log(err);
})

