import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
  // first way using context : init contextType -> this.context get value
  // --------------------------------------------
  // static contextType = LanguageContext;
  // render() {
  //   // console.log(this.context);
  //   const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
  //   return <button className='ui button primary'>{text}</button>;
  // }

  // second way using context: LanguageContext.Consumer

  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
// Button.contextType = LanguageContext;

export default Button;
