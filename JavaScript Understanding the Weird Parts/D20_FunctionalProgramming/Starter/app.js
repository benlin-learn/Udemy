function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr1[i]));
  }
  return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);
// var arr2 = [];
// for (var i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i] * 2);
// }
var arr2 = mapForEach(arr1, function (item) {
  return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function (item) {
  return item > 2;
});
console.log(arr3);

var checkPastLimit = function (limiter, item) {
  console.log(item);
  return item > limiter;
};

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

var checkLimiterSimplified = function (limiter) {
  // 回傳一個有preset的 function
  return function (limiter, item) {
    return item > limiter;
    // preset 即為傳入的 limiter
  }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkLimiterSimplified(2));
console.log(arr5);

var checkLimiterSimplified2 = function (limiter) {
  return function (item) {
    return item > limiter;
  };
};

var arr6 = mapForEach(arr1, checkLimiterSimplified(2));
console.log(arr6); // [false, false, true]
