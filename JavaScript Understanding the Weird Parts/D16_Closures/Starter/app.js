function greet(whattosay) {
  return function (name) {
    console.log(whattosay + ' ' + name);
  };
}

// greet('Hi')('Tony');
var sayHi = greet('Hi');
console.log(sayHi);
sayHi('Tony');
