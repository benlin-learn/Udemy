var person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
var john = {
  firstName: 'John',
  lastName: 'Doe',
};

// don't do this EVER ! for demo purpose only !!

john.__proto__ = person;

console.log(john.getFullName());

var jane = {
  firstName: 'Jane',
};

jane.__proto__ = person;
console.log(jane.getFullName());

// -------------------------------
var a = {};
var b = function () {};
var c = [];
