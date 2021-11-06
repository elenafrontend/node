// ** 1
// запуск файла с аргументами командной строки
// node app 1 2 3
// чтобы получить аргументы в файле
console.log(process.argv);
// вывод
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\Sony\\Desktop\\Programming\\RSS\\Stage01\\node\\app\\app',
//   '1',
//   '2',
//   '3'
// ]

// без первых двух строк
console.log(process.argv.slice(2));
// вывод
// [ '1', '2', '3' ]

// ** 2
// Чтобы иметь возможность отправлять аргументы в любом порядке 
// или пропускать какие-то из них, аргументы командной строки можно пометить
// с помощью флагов

// node app -m Hello

// функция, получающая флаг аргумента и возвращающая его значение
function getValue(flag) {
	const flagIndex = process.argv.indexOf(flag);
	return (flagIndex !== -1) ? process.argv[flagIndex + 1] : null;
}

const message = getValue('-m');
console.log(message);


// ** 2
// Переменные окружения
// Иногда нам нужно снаружи передать в код некое значение, 
// которое будет использоваться нашим приложением
// Переменные окружения имеют синтаксис вида variable_name=variable_value и размещаются перед node

//  PRODUCTION=false node app

const productionMode = process.env.PRODUCTION === "true";
if (productionMode) {
  console.log('Application is running in production mode');
  // do production things
} else {
  console.log('Application is running in development mode');
  // do dev things
}