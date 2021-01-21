class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

const brad = new Person('Brad', 'Doe');

console.log(brad.greeting());

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }
  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'vip');

console.log(john.greeting());
console.log(Customer.getMembershipCost());

// console.log(Person.getMembershipCost());
// not get to work cuz getMembershipCost is a static method in class Customer
