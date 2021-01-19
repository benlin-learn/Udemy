class Animal {
  constructor(firstName, lastName) {
    this.firstName = firstName || 'Default';
    this.lastName = lastName || 'Default';
  }
  speak() {
    return this.firstName + ' make a noise';
  }
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

// var john = new Person('John');
// console.log(john);

class Dog extends Animal {
  speak() {
    return this.firstName + ' makes a bark';
  }
  speakAnimal() {
    return super.speak();
  }
}

var lucky = new Dog('Lucky');
console.log(lucky);

console.log(lucky.speak());
console.log(lucky.speakAnimal());
