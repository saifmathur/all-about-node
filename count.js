var counter = function (arr) {

    return 'there are ' + arr.length+ ' elements in this array';
};

var adder = function (a,b) {
    return `the sum of the two numbers is ${a+b}`;
};

//console.log(counter(['1','2','3']));
//module.exports.counter = counter; //without this statement, counter variable wont allow itself to latch onto another js file
//module.exports.adder = adder;

//OR YOU COULD 

module.exports = {
    counter: counter,
    adder: adder
};
