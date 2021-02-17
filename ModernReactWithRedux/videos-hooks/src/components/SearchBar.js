import React, { useState } from 'react';
const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className='ui segment'>
      <form className='ui form' onSubmit={onFormSubmit}>
        <div className='field'>
          <label htmlFor=''>Search For A Video: </label>
          <input
            value={term}
            type='text'
            onChange={(e) => setTerm(e.target.value)}
            placeholder='Search...'
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
