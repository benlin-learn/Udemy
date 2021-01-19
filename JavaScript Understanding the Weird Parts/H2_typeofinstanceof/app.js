var a = 3;
console.log(typeof a); //number

var b = 'Hello';
console.log(typeof b); //string

var c = {};
console.log(typeof c); //object

var d = [];

console.log(typeof d); //object --> weird!
console.log(d.toString()); // "" --> empty string --> the data inside the array turn into the string
console.log(Object.prototype.toString.call(d)); // [object Array]--> better!

// if (Object.prototype.toString.call(d) === '[object Array]') {
//   console.log('It is an array');
// } else {
//   console.log('It is not an array');
// }

var e = [{ name: 'John' }, { age: 15 }];
console.log(e.toString()); // [object object],[object object]
console.log(Object.prototype.toString.call(e)); // [object Array]

function Person(name) {
  this.name = name;
}

var f = new Person('Jane');
console.log('new Person(): ' + typeof f);
console.log(f instanceof Person);

console.log(typeof undefined); //undefined
// makes sense

console.log(typeof null); //object
// a bug since, like, forever...

var z = function () {};
console.log(typeof z);
