// polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error(
        'Object.create implementation' + ' only accepts the first parameter.'
      );
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var Person = {
  firstName: 'Default',
  lastName: 'Default',
  greet: function () {
    return 'Hi ' + this.firstName;
  },
};

var john = Object.create(Person);

john.firstName = 'John';
john.lastName = 'Doe';
john.address = '111 Main St.';

console.log(john);
