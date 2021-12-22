const http = require('http');

const server = http.createServer((req, res) =>{
    res.end('here is the answer 42')
});

server.listen(process.env.PORT || 3000);