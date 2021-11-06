// fs module
const fs = require('fs');
const path = require('path');

// create directory
fs.mkdir(path.join(__dirname, 'notes'), err => {
	if (err) throw err;
	console.log('Папка была создана')
})

// create file
fs.writeFile(
	path.join(__dirname, 'notes', 'mynotes.txt'),
	'Hello, Node.js\n',
	err => {
		if(err) throw err;
		console.log('Файл был создан')
	}
)

// append file data
fs.appendFile(
	path.join(__dirname, 'notes', 'mynotes.txt'),
	'Append data to file',
	err => {
		if(err) throw err;
		console.log('Файл дополнен')
	}
	)
	
	// read file
	fs.readFile(
	path.join(__dirname, 'notes', 'mynotes.txt'),
	'utf-8',
	(err, data) => {
		if(err) throw err;
		console.log(data);
	}
)

// rename file
fs.rename(
	path.join(__dirname, 'notes', 'mynotes.txt'),
	path.join(__dirname, 'notes', 'notes.txt'),
	err => {
		if(err) throw err;
		console.log('Файл переименован')
	}
)