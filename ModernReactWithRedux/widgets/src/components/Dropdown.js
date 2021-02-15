import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener(
      'click',
      onBodyClick,
      // CAPTURING_PHASE
      { capture: true }
    );

    return () => {
      // console.log('removeEventListener');
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className='item'
        onClick={() => {
          // console.log('item clicked');

          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  // console.log(ref.current);

  return (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label className='label'>{label}</label>
      </div>
      <div
        onClick={() => {
          setOpen(!open);
          // console.log('dropdown clicked');
        }}
        className={`ui selection dropdown ${open ? 'visible active' : ''}`}
      >
        <i className='dropdown icon'></i>
        <div className='text'>{selected.label}</div>
        <div className={`menu ${open ? 'visible transition' : ''}`}>
          {renderedOptions}
        </div>
      </div>

      <div className=''>This text is {selected.value}</div>
    </div>
  );
};

export default Dropdown;
