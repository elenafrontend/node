const EventEmitter = require('events');
const emitter = new EventEmitter();

// При подписке на событие его обработчик ставится в очередь обработчиков
// Одному и тому же событию можно назначить несколько обработчиков 
// (по умолчанию не больше 10, но это не жесткий лимит). 
// Обработчики срабатывают в том порядке, в котором они были назначены:
const importantHandler = () => { console.log('Important handler') }

// Один и тот же обработчик может быть назначен несколько раз:
emitter.on('start', (message, number) => console.log(`${message} № ${number}`));
emitter.on('start', (message, number) => console.log(`${message} № ${number}`));
// Если необходимо, чтобы обработчик срабатывал только один раз,
// для подписки используем метод once()
emitter.once('start', () => console.log(`Обработчик № 2`));
// Поставить назначенный позже обработчик в начало очереди нам поможет метод prependListener
emitter.prependListener('start', importantHandler);

// Обработчик срабатывает на каждую генерацию события:
emitter.emit('start', 'Start message', 1);
// Удалить из очереди одну функцию-обработчик определенного события позволяет
// метод экземпляра EventEmitter off() (или его алиас removeListener)
// второй раз при событии обработчик importantHandler не сработает
emitter.off('start', importantHandler);
emitter.emit('start', 'Second message', 1);



// Иногда мы хотим, чтобы наш собственный класс имел API EventEmitter:
class User extends EventEmitter {
  constructor(name, password) {
      super();
      this.name = name;
      this.password = password;
  }

  sayHi() {
      console.log(`Hi! My name is ${this.name}`)
  }
}

const user = new User('Vasya', 12345);

user.on('greetings', user.sayHi);

user.emit('greetings'); // Hi! My name is Vasya

