var http = require('http');
var server = http.createServer(function (req, res){
    console.log('request was made '+ req.url);
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('listening on port 27017...');

});


server.listen(3000, 'localhost');
console.log('listening on port 3000...');