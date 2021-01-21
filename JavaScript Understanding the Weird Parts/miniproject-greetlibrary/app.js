// var a = G$('Ben', 'Lin');
// console.log(a);
// console.log(a.formalGreeting());
// console.log(a.greet('formal'));

$('#login').on('click', function () {
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var language = $('#lang option:selected').val();
  var loginGreetr = G$(firstName, lastName, language);
  var showHTML = $('#greeting');
  $('#logindiv').hide();
  // console.log(firstName);
  // console.log(lastName);
  // console.log(language);
  loginGreetr.setLang($('#lang').val()).showHTMLGreeting('#greeting', true);
});
