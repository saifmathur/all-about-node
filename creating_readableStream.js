var http = require('http');
var fs = require('fs');

/*
var myReadStream = fs.createReadStream(__dirname + '/keras.txt', 'utf8');

var myWritableStream = fs.createWriteStream(__dirname + '/kerasNew.txt');


    myReadStream.on('data', function(chunk){
    console.log('new chunk written to file. ');
    //console.log(chunk);
    myWritableStream.write(chunk);

    
});  */

//using pipes
//all the above code`s function can be done using this simple line
//myReadStream.pipe(myWritableStream);


//sending this data to the output of the server response
var server = http.createServer(function(req,res){
    console.log('request was made: '+ req.url);
    res.writeHead(200, {'Content-Type':'text/plain'}); 
    var myReadStream = fs.createReadStream(__dirname + '/keras.txt','utf8');
    myReadStream.pipe(res);
    
});

server.listen(3000, '127.0.0.1');
console.log('outputting to port 3000...');