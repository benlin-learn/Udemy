
var g = G$('John', 'Doe', 'es');
// console.log(g);

// console.log(g.greeting());
// console.log(g.formalGreeting());
// console.log(console);

g.greet().log().setLang('en');


$('#login').click(function(){
  // create new Greetr Object
  var loginGrtr = G$('John','Doe');
  // hide the login on the screen
  $('#logindiv').hide();


  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})

