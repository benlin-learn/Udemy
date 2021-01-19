Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
  // pair-value
  console.log(prop + ': ' + arr[prop]);
}

// In case of arrays, don't use for-in
// use standard for loop
// for(let i = 0; i < arr.length; i++){

// }
//
