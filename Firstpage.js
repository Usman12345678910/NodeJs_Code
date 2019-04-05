var http = require('http');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.end('<h1>Hello Class:HI Usman Madni Kasa ha</h1>');

}).listen(8080);