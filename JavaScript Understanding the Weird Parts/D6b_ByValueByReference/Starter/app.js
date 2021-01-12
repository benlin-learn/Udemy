// by value;
var a = 3;
var b;

b = a;
// a and b are copy by value, have their own address separately.
console.log(a); // 3
console.log(b); // 3
a = 4;
console.log(a); // 4
console.log(b); // 3

// by reference
var c = { greeting: 'h1' };
var d;

d = c;
console.log(c); // h1
console.log(d); // h1

c.greeting = 'hello';

console.log(c); // hello
console.log(d); // hello
