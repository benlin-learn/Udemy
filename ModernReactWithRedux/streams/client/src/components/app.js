import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to='/pagetwo'>Navigate to pagetwo</Link>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click me!</button>
      <Link to='/'>Navigate to pageone</Link>
    </div>
  );
};

class app extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' exact component={PageOne} />
          <Route path='/pagetwo' component={PageTwo} />
        </BrowserRouter>
      </div>
    );
  }
}

export default app;
