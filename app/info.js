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

// check if file exist

// Do not use fs.access() to check for the accessibility of a file before calling 
// fs.open(), fs.readFile() or fs.writeFile(). Doing so introduces a race condition, 
// since other processes may change the file's state between the two calls. 
// Instead, user code should open/read/write the file directly 
// and handle the error raised if the file is not accessible.

const file = path.join(__dirname, 'notes', 'mynotes.txt');
fs.access(file, fs.constants.F_OK,(err) => {
		console.log(`${file} ${err ? 'does not exist' : 'exist'}`);
	}
)