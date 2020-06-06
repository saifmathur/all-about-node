//using express
var express = require('express');
var bodyParser = require('body-parser'); //for passing post data, eg: submitting a form


var urlEncoderParser = bodyParser.urlencoded(
    { extended: false }
);



//since express is a function as well inside this module, so we do the following
var app = express();
/*
HTTP requests
1. GET ---> app.get('route',function)
2. POST ---> app.post('route',function)
3. DELETE ---> app.delete('route',function)
4. PUT
*/

// express is clever enough to figure out what kind of input is being received
//NO NEED OF SPECIFYING CONTENT TYPE    


app.set('view engine', 'ejs') /*view engine, by default js is gonna look for view in a folder called
'views' , so create a folder in the root dir 
create a profile.ejs file

use 'res.render('profile'); to actually use that ejs template
*/

app.use('/stuff', express.static('stuff'));


app.get('/',function(req,res){   //the root directory
    //res.send('this is the home page');
    //res.sendFile(__dirname + '/index.html');
    //instead of sending html files which is very tedious, we can render partial views that we just created under partial folder. use the below code to render and pass in the view names
    res.render('index.ejs');
    
});

//to submit the form we need app.post() and not get()
app.get('/contact-us',function(req,res){   //the root directory
    //console.log(req.query);
    //res.send('this is the contact page');
    //res.sendFile(__dirname + '/contact.html');
    res.render('contact', {qs: req.query});
});
//post for contact form
app.post('/contact-us', urlEncoderParser, function (req, res){
    console.log(req.body); 
    res.render('contact-success',{data: req.body});
});





/*now what is someone is requesting a page which is 1/1000, we cant create seperate modules for 
each profile, we need some kind of dynamic method 
*/
//dynamic way, now we can ask the user for this id by a function,requesting the user

app.get('/profile/:name', function (req, res){
    var data1 = {age: 22, job: 'developer', hobby: ['lifting','coding','fixing']};
    //res.send('you requested to see a profile with the id of ' + req.params.id); //getting the parameter from  the url itself
    res.render('profile', {person: req.params.name, data: data1}); //now embbed this data into that ejs file in views folder
}); 
app.listen(3000);

/*now TEMPLATING ENGINES, they come into play when we have to inject some kind
of dynamic data, for example getting data from a database
we`re gonna use a template called 'EJS' stands for embedded javascript
EJS is a package, so use 'npm install ejs -save'

now we need to tell js that we`re gonna use ejs as our 'view engine'/template engine,scroll up
for the line.
*/

