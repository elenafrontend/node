const fs = require('fs');
const path = require('path');

const [command, title, content] = process.argv.slice(2);

switch(command) {
	case 'create': 
		create(title, content);
		break;
	case 'list': 
		list();
		break;
	case 'view': 
		view(title);
		break;
	case 'remove': 
		remove(title);
		break;
	default: console.log('Неизвестная команда');
}

function create(title, content) {
	fs.open('notes.json', 'r+', (error, fd) => {
		if(error) {
			if(error.code === 'ENOENT') {
				fs.writeFile('notes.json', '[]', error => {
					if(error) return console.error(error);
				})
			} else {
				throw error;
			}
		}
		// fd - file descriptor - ссылка на файл в функции open

		fs.readFile('notes.json', (error, data) => {
			if(error) return console.error(error);

			const notes = JSON.parse(data);
			const note = { title, content };
			notes.push(note);
			const json = JSON.stringify(notes);
			
			fs.writeFile('notes.json', json, error => {
				if(error) return console.error(error);

				// выводит содержимое файла в консоль после добавления
				// fs.readFile('notes.json', 'utf8', (error, data) => {
				// 	if(error) return console.error(error);
				// 	console.log(data);
				// })

				console.log('Заметка создана');
			})
		})
	})
}


function list() {
	fs.readFile('notes.json', 'utf-8', (error, data) => {
		if(error) console.error(error);

		const notes = JSON.parse(data);
		notes.forEach((note, index) => {
			console.log(`Заметка № ${index + 1}: ${note.title}`);
		});
	})
}

function view(title) {
	fs.readFile('notes.json', (error, data) => {
		const notes = JSON.parse(data);
		let content = '';
		notes.some(note => {
			if(note.title === title) {
				content = note.content;
			}
		})
		console.log(content ? `Содержание заметки: ${content}` : 'Заметка не найдена');
	})
}

function remove(title) {
	fs.readFile('notes.json', (error, data) => {
		if(error) console.error(error);

		const notes = JSON.parse(data);
		// console.log(notes);
		let deleteNoteIndex = notes.findIndex(note => note.title === title);
		let deleteCount = 0;

		while(deleteNoteIndex >= 0) {
			notes.splice(deleteNoteIndex, 1);
			deleteCount++;
			deleteNoteIndex = notes.findIndex(note => note.title === title);
		}

		// console.log(notes);

		// Вариант 2
		// notes = notes.filter(note => note.title !== title);

		const json = JSON.stringify(notes, null, 2);
		fs.writeFile('notes.json', json, error => {
			if(error) console.error(error);

			switch(true) {
				case deleteCount === 1: 
					console.log(`Удалена 1 заметка`);
					break
				case deleteCount > 1 && deleteCount < 5:
					console.log(`Удалено ${deleteCount} заметки`);
					break
				case deleteCount > 5:
					console.log(`Удалено ${deleteCount} заметок`);
					break
				default: 
					console.log('Заметок с таким заголовком нет');
			}

			// выводит содержимое файла в консоль после добавления
			// fs.readFile('notes.json', 'utf8', (error, data) => {
			// 	if(error) return console.error(error);
			// 	console.log(data);
			// })
		})
	})
}

