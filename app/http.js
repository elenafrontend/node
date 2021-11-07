
// ! Github app 
// https://github.com/rolling-scopes-school/tasks/blob/master/stage1/modules/node-materials/node/projects/github-app.md

const http = require('http');
const PORT = 3000;

const requestHandler = (request, response) => {
  const { method, url } = request;
  console.log(`Получен ${method}-запрос на ${url}`);
  response.write('Hello Node.js');
  response.end('Bye!');
};

// request хранит информацию о запросе
// response отвечает за отправку ответа

// В методах write и end можно передать строку, 
// которая содержит HTML-теги с инлайн стилями

const requestHandler2 = (request, response) => {
  const { method, url } = request;
    const heading = `<h1 style="color: red">${url} page</h1>`;
    const content = `<div style="background-color: green; width: 100px; height: 100px">Green block 100px x 100px</div>`;
    console.log(`Получен ${method}-запрос на ${url}`);
    response.write(heading);
    response.end(content);
};

const server = http.createServer(requestHandler2);

server.listen(PORT, 'localhost', () => {
  console.log(`Сервер запущен на порту ${PORT}`);
})

// localhost:3000/some/page