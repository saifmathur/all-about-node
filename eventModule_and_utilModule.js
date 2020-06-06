var stuff = require('events');
var util = require('util');

/*event listeners
var myEmitter = new stuff.EventEmitter();
myEmitter.on('someEvent', function(message){
    console.log(message);

});

myEmitter.emit('someEvent','hello hello hello');
*/

var Person = function(name){
    this.name = name;

};

util.inherits(Person, stuff.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var saif = new Person('saif');

var people = [james,mary,saif];

people.forEach(function (person){
    person.on('speak', function (message) {
        console.log(person.name+ ' said: '+ message);       
    })

});

saif.emit('speak','hello hello hello');

