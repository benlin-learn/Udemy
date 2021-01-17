var person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
};

// console.log(person.getFullName());

var logName = function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-------------');
};

var logPersonName = logName.bind(person);

// logPersonName();
// logPersonName('en');

// or

// var logName = function (lang1, lang2) {
//   console.log('Logged: ' + this.getFullName());
// }.bind(person);

// logName();

// just like logName(),but execute the function, setup 'this', and pass the arguments at the same time
logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

// -------------------------------------
(function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-------------');
}.apply(person, ['es', 'en']));

// function borrowing
var person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
};
console.log(person.getFullName.apply(person2));
person.getFullName.apply(person2);

// function currying
function multiply(a, b) {
  return a * b;
}
var multipleByTwo = multiply.bind(this, 2);

console.log(multipleByTwo(6));

var multipleByTwo = multiply.bind(this, 3);

console.log(multipleByTwo(6));
