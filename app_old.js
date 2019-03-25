const http = require('http');

http.createServer((request, response) => {
        response.writeHead(200, { 'Content-type': 'application/json' });
        response.write(JSON.stringify({ nombre: 'Aarón', edad: 30, url: request.url }));
        response.end();
    })
    .listen(6969);

console.log('Listening 6969 port');