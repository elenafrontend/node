// Напишите программу, которая просит у пользователя ввести два числа, 
// складывает эти числа, если запускается с флагом -s, 
// или перемножает, если запускается с флагом -m, после чего завершает свою работу. 
// Для ввода и вывода информации используйте стандартные потоки ввода/вывода. 
// Пример работы (пользовательский ввод начинается с >)

const { stdin, stdout, exit } = process;

const flag = process.argv[2];
const acceptableFlags = ['-m', '-s'];
const isFlagAcceptable = acceptableFlags.includes(flag);
if(!isFlagAcceptable) {
	stdout.write('Попробуйте ещё раз запустить файл с флагом -s или -m');
	exit();
}

stdout.write('Введите два числа\n')

stdin.on('data', data => {
	const dataFormated = data.toString();
	const numbers = dataFormated.split(' ').map(numStr => +numStr);
	const isLengthCorrect = numbers.length === 2;
	const isValuesCorrect = !numbers.includes(NaN);

	if(!isLengthCorrect || !isValuesCorrect) {
		stdout.write('Необходимо ввести два числа через пробел');
		exit()
	}

	const [number1, number2] = numbers;
	let result;
	if(flag === '-m') {
		result = `${number1} * ${number2} = ${number1 * number2}`
	}
	if(flag === '-s') {
		result = `${number1} + ${number2} = ${number1 + number2}`
	}
	stdout.write(result);
	exit();
})


