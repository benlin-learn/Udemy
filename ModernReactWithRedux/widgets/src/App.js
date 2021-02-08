import React, { useState } from 'react';
import Accordion from './components/Accordion';

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
// [item, setItem] = useState();
const App = () => {
  return (
    <div>
      Widgets App
      <Accordion items={items} />
    </div>
  );
};

export default App;