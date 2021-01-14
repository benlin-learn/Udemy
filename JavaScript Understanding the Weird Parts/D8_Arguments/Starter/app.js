function greeting(firstname, lastname, language, ...other) {
  language = language || 'en';

  if (arguments.length === 0) {
    console.log('Missing Parameters!');
    console.log('----------------');
    return;
  }
  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log('arg0: ' + arguments[0]);

  console.log('-----------');
}

greeting();
greeting('John');
greeting('John', 'Doe');
greeting('John', 'Doe', 'es', '111 main st.', 'New York');
