(function (global, $) {
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };
  // variables that keep private and could not access by outside
  var supportedLanguage = ['zh-tw', 'en', 'es'];

  var greetings = {
    'zh-tw': '嗨',
    en: 'Hello',
    es: 'Hola'
  };
  var formalGreetings = {
    'zh-tw': '歡迎光臨',
    en: 'Greetings',
    es: 'Saludos'
  };
  var loginMessage = {
    'zh-tw': '登入',
    en: 'Logged in',
    es: 'Inició sesión'
  };
  // the methods
  Greetr.prototype = {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },
    // validate valid language or not
    validate: function () {
      if (supportedLanguage.indexOf(this.language) == -1) {
        throw 'Invalid language';
      }
    },
    // return greeting text
    greeting: function () {
      return greetings[this.language] + ' ' + this.firstName;
    },

    // return formal greeting text
    formalGreeting: function () {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    // check formal or not and return corresponding methods
    msgHandler: function (formal) {
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      return msg;
    },
    greet: function (formal) {
      var msg;
      msg = this.msgHandler(formal);
      // finding out if console is available
      if (console) {
        console.log(msg);
      }
      return this;
    },
    showHTMLGreeting: function (selector, formal) {
      if (!$) {
        throw 'Missing jQuery!';
      }
      if (!selector) {
        throw 'Missing selector!';
      }
      var msg;
      msg = this.msgHandler(formal);
      console.log(msg);

      $(selector).html(msg);

      return this;
    },
    setLang: function (language) {
      this.language = language;

      this.validate();
      return this;
    }
  };
  // the place 'new' object initialize
  Greetr.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'zh-tw';
    // RUN FIRST to check if language is validate
    self.validate();
  };

  // connect Greetr.init and Greet, make sure all the prototype(the methods) can be used or invoked through Greetr instead of Greetr.init
  // A trick that We can create object without calling 'new'
  Greetr.init.prototype = Greetr.prototype;

  // make function Greetr available using Greetr and G$
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
