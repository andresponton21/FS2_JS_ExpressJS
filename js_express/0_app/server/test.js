var http = require('http');

http.createServer(function (req, res) {
    res.write('Helo world');
    res.end();
}).listen(8080);