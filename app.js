var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello World');
});

var port = Number(process.env.Port || 3000);

server.listen(port);


