require('colors');

const user = {
  name: 'Ann',
    age: 23,
    sayHi() {
        console.log(`Hi! My name is ${this.name}`.rainbow);
    }
};

// Чтобы  экспортировать объект есть 2 способа:

//  1
// Записать значение в качестве свойства объекта exports, либо module.exports

// работает так же, как и module.exports.user = user;
// * exports.user = user;

// 2
// Перезаписать сам объект module.exports 
// (в этом случае необходимо использовать именно module.exports,
// поскольку exports лишь ссылка на module.exports

// exports = user не сработает 
// module.exports = user;

// ! 3
// ! Также экспортируемое значение нет необходимости предварительно записывать 
// в переменную, если оно не используется где-то еще

module.exports = {
  name: 'Ann',
  age: 23,
  sayHi() {
      console.log(`Hi! My name is ${this.name}`.rainbow);
  }
};

// module.exports можно перезаписать не только объектом, но и примитивом:
// module.exports = 42;
