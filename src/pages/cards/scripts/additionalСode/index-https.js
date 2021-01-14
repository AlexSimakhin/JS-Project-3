// Скрипт для генерации транзакий по карте.
// Скрипт генерирует примерно 400 операций за месяц, начисление и списание
// Для запуска скрипта перейдите в консоли в папку где находится скрипт и запустите команду
// node index-https.js

// Не забудьте указать ваш токен и карту по которой хотите сгенеррировать операции.

const https = require('https');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhAYWxleCIsImlhdCI6MTYwNjkwOTQ5OSwiZXhwIjoxNjA2OTk1ODk5fQ.FaEq9JmGpXw6sKgLddV5XxI_pm5PKxRZAyZ6EjRzGbg';
const card = '';

if (!token || !card) {
  throw new Error('токен и номер карточки должны быть определены');
}

const orders = [{
  'title': 'Пополнение',
  'description': 'Первое зачисление',
  'operation': 'credit',
  'amount': 1000000,
  'card': card,
  'created': new Date(),
}];

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const uslugi = ['Вода', 'Домофон', 'ЖЭК', 'Интернет', 'Охрана','Электричество'];

const generateDebetOperations = (date) => {
  for (let i = 0; i < random(4, 14); i++) {
    orders.push({
      'title': 'Оплата коммуналки',
      'description': uslugi[random(0, 5)],
      'operation': 'debet',
      'amount': random(10, 100),
      'card': card,
      'created': date,
    });
  }
};

const generateCreditOperations = (date) => {
  for (let i = 0; i < random(4, 14); i++) {
    orders.push({
      'title': 'Пополнение',
      'description': i % 2 === 0 ? 'Пополнение чере АТМ' : 'Денежный перевод',
      'operation': 'credit',
      'amount': random(10, 100),
      'card': card,
      'created': date,
    });
  }
};

generateDebetOperations();
generateCreditOperations();

for (let j = 30; j > 0; j--) {
  const date = new Date();
  date.setDate(j);
  generateDebetOperations(date);
  generateCreditOperations(date);
}

const options = {
  hostname: 'lab.lectrum.io',
  path: '/js2/api/ironbank/orders/populate',
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'x-token': token,
    'Content-Type': 'application/json',
  },
};

console.time('insert');
const req = https.request(options, (res) => {
  console.log(res.statusCode);
  console.timeEnd('insert');
});

req.write(
  JSON.stringify(orders),
);

req.on('error', (e) => {
  console.error(e);
});
req.end();