var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('connection established. ' + req.url);
    if (req.url === '/home' || req.url === '/'){

        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact-us')
    {
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    //sending json
    else if(req.url === '/api/saif')
    {
        var data = [{
            name: 'saif',
            age:22,
            occ:'dev'
        }];

        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(data));

    }
    //if there is no such page, we need a not found message
    else
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/notFound.html').pipe(res);
    }

});
server.listen(3000,'localhost');
console.log('hello world');

