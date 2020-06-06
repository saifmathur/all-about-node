var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made ' + req.url);
    res.writeHead(200, {'Content-Type':'application/json'}); 
    
    var myObj = {
        name:'saif',
        job:'developer',
        age:22
    };
    /*
    .end() method expects a string or a buffer and the object is neither of those
    so we need to convert it to JSON format and then convert that into a string. 
    */
    res.end(JSON.stringify(myObj))


});

server.listen(3000,'localhost');
