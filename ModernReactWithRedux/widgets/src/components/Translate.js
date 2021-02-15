import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' }
];

const Translate = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState(options[0]);

  return (
    <div className='ui form'>
      <div className='field'>
        <label>Enter Text</label>
        <input
          value={text}
          type='text'
          className='input'
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>

      <div className='field'>
        {/* Dropdown Component */}
        <Dropdown
          label='Select a Language'
          options={options}
          selected={language}
          onSelectedChange={setLanguage}
        />
      </div>
      <hr />
      <div className='output'>
        <h3 className='ui header'>output</h3>

        <Convert text={text} language={language} />
      </div>
    </div>
  );
};

export default Translate;
