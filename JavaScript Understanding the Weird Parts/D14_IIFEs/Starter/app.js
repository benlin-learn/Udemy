// function statement
function greet(name) {
  console.log('Hello ' + name);
}
greet('John');

// using function expression
var greetFunc = function (name) {
  console.log('Hello ' + name);
};
greetFunc('John');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = (function (name) {
  return 'Hello ' + name;
})('John');

console.log(greeting);
// Error cause return is a String
// console.log(greeting());

3;
(3 + 4) * 2;

var firstName = 'John';

(function (name) {
  var greeting = 'Inside IIFE: Hello ';
  console.log(greeting + name);
})(firstName); //IIFE
