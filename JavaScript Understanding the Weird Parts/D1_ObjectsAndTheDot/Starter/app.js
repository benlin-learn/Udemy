var person = new Object();

person['firstName'] = 'Tony';
person['lastName'] = 'Alicea';

var firstNameProperty = 'firstName';

// console.log(person);
// console.log(person['firstName']);
console.log(person[firstNameProperty]);

console.log(person.firstName);
console.log(person.lastName);

person.address = new Object();
person.address.street = '111 Main St.';
person.address.city = 'New York';
person.address.state = 'NY';

console.log(person);
console.log(person.address.street);
console.log(person['address']['city']);
