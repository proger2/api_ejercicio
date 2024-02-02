const http = require('http');

const hostname = 'localhost';

const port = 3000;

const server = http.createServer((req , res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo');
});

server.listen(port, hostname, () => {
    console.log('Escuchando en el puerto 3000')
}); 






