import React, { Component } from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';
class App extends Component {
  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector />

          {/* {this.state.language} */}
          <ColorContext.Provider value='primary'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;