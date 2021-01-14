function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// ----------------------------------

function buildFunctions2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    // ES6 let
    // let j = i;
    // arr.push(
    //   function () {
    //   console.log(j);
    //   }
    // );

    // In ES5 way
    arr.push(
      // IIFE 立即函式會立即 invoke 該函式把for loop 的每個 i 在傳入的當下，就建立一個 function execution context 並存入該 i 值
      // 匿名函式 function(j){} 會回傳一個 function，但因此方程式不是 IIFE 函式，不會立即 invoke 所以只會在該 function execution context 的某個記憶體建立函式。
      // 當 function execution context  逐行跑完關閉後，匿名函式 function(j){}，以及傳入的 variable i 會因為為了保持 outer environment reference 的完整性而被留下來。
      // 等到 fs2[0](); 函式被 invoke的時候，因為該層找不到 variable j ，所以 javascript engine 會去尋找各自 outer environment reference 留下來的記憶體，也就是匿名函式 function(j){} 的 function execution context 留下來的記憶體位置，從而存取 i/j 值

      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
