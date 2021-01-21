function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const now = Date.now();
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    console.log(now);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const brad = new Person('Brad', '9-10-1987');

console.log(brad.calculateAge());
