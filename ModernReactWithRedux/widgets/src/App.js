import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

import Header from './components/Header';
// Accordion
const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

// Dropdown
const options = [
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'A Shade of Blue', value: 'blue' }
];

// Simple routing---------------------------------

// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />;
//   }
// };

// const showList = () => {
//   if (window.location.pathname === '/list') {
//     return <Search />;
//   }
// };
// const showDropdown = () => {
//   if (window.location.pathname === '/dropdown') {
//     return <Dropdown />;
//   }
// };
// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />;
//   }
// };
// ----------------------------------------------------

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />

      {/* <Accordion items={items} /> */}
      {/* {showAccordion()} */}
      <Route path='/'>
        <Accordion items={items} />
      </Route>

      {/* <Search /> */}
      {/* {showList()} */}
      <Route path='/list'>
        <Search />
      </Route>

      {/* dropdown */}
      {/* {showDropdown()} */}
      <Route path='/dropdown'>
        <Dropdown
          label='Select a Color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown && (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      )} */}

      {/* <Translate /> */}
      {/* {showTranslate()} */}
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
