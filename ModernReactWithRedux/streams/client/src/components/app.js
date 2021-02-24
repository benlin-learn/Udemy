import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

import StreamList from './streams/StreamList';
import StreamShow from './/streams/StreamShow';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';

class app extends Component {
  render() {
    return (
      <div className='ui container'>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={StreamList} />

          <Route path='/streams/show' exact component={StreamShow} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit' exact component={StreamEdit} />
          <Route path='/streams/delete' exact component={StreamDelete} />
        </BrowserRouter>
      </div>
    );
  }
}

export default app;
