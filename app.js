var new1 = require('./count');

//ALL ARE GLOBAL PACKAGES
/*console.log("hello world");

setTimeout(function (){

    console.log('3 seconds have passed');

},3000)

var time = 0;

var timer = setInterval(function (){
    time = time + 2;
    console.log(time + ' seconds have passed');

    if (time > 4){ 
        clearInterval(timer);
        console.log(__dirname); //prints directory name
        console.log(__filename);    //prints file name
    }

},2000);
*/

console.log(new1.counter(['1','2','3'])); //accessed from count.js
console.log(new1.adder(2,3));