greet();

function greet() {
  console.log('hi');
}
var anonymousGreet = function () {
  console.log('hi!');
};
anonymousGreet();

function log(a) {
  // console.log(a);
  a();
}

// log(3);
// var b = 3;
// log(b);
// log('Hello');
// log({ firstName: 'John', age: 50 });
// log(function () {
//   console.log('hi');
// });
log(anonymousGreet);
