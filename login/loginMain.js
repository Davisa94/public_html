var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
})
port = 80;
host = 'skycraftia.duckdns.org';
server.listen(port, host);
