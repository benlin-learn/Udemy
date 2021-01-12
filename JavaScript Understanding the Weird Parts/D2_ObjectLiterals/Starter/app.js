var Tony = {
  firstName: 'Tony',
  lastName: 'Alicea',
  address: {
    street: '111 Main St.',
    city: 'New York',
    state: 'NY',
  },
};

// console.log(person);

function greet(person) {
  console.log(person.firstName);
  console.log(person.lastName);
}

greet(Tony);

greet({
  firstname: 'Mary',
  lastname: 'Doe',
});

Tony.address2 = {
  street: '333 Second St.',
};
console.log(Tony);
