// Import the React and ReactDOM libraries

// ES2015 Modules
import React from 'react';
import ReactDOM from 'react-dom';

// CommonJS Modules
// const React = require('react');

// hot reload
if (module.hot) {
  module.hot.accept();
}

// function getButtonText() {
//   return 'Click On me!';
// }

// class App extends React.Component
// Create a React Component
const App = () => {
  const buttonText = { text: 'Click Me' };
  const labelText = 'Enter name: ';
  return (
    <div>
      <label className='label' htmlFor='name'>
        {labelText}
      </label>
      <input type='text' id='name' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
        {/* {getButtonText()} */}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.getElementById('root'));
