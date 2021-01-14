// console.log(this);
function a() {
  console.log(this);
  this.newVariable = 'hello';
}
var b = function () {
  console.log(this);
};

a();

console.log(newVariable);

b();

var c = {
  name: 'The c object',
  log: function () {
    var self = this;
    self.name = 'Updated c object';
    console.log(self);

    var setName = function (newName) {
      self.name = newName;
    };
    setName('Updated again! The c object');
    console.log(self);
  },
};

c.log();
