const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Omkar');
})

server.listen(4000);