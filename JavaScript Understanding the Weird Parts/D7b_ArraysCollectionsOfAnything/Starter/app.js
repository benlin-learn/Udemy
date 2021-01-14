// var arr = new Array();
var arr = [
  1,
  false,
  {
    name: 'Ben',
    address: 'LongShang st.',
  },
  function (name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
  },
  'Hi',
];

console.log(arr);
arr[3](arr[2].name);
