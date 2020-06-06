var fs = require('fs');


//reading a file in syn 
filename = 'C:/Users/Saif Mathur/Desktop/dictionary.json';
//var contents_of_file = fs.readFileSync(filename, 'utf8');
//console.log(contents_of_file);

//reading asynchronusly 
var content = fs.readFile(filename,'utf8', function (err,data){
    console.log(data);

});

//writing the contents to a new file
//fs.writeFileSync('newFile.txt',content);
fs.writeFile('newFile.txt',content);


//deleting files
//fs.unlink('newfile.txt');

//create directory
fs.mkdir('newDir',function(){
    fs.readFile('newFile.txt','utf8',function (err, data){
        fs.writeFile('./newDir/writeMe.txt',data);
    });
});

//remove directory
//fs.rmdir('newDir');