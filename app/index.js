require('colors');

// Данный пакет по умолчанию работает за счет расширения String.prototype, 
// поэтому нам не нужно записывать результат require('colors') в переменную, 
// поскольку мы не используем его

const text = 'Helolo, Node.js'
console.log(text.rainbow);