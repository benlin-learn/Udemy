import React from 'react';
import ReactDOM from 'react-dom';
// faker library for avatar
import faker from 'faker';

// import components
import CommentDetail from './CommentDetail';

import ApprovalCard from './ApprovalCard';

// hot reload
if (module.hot) {
  module.hot.accept();
}

// https://source.unsplash.com/random/300x300?sig=2

const App = () => {
  return (
    <div className='ui comments'>
      <h3 className='ui dividing header'>Comments</h3>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      {/* CommentDetail 直接當 props 傳進components,
      使用 props.children 來讀取 */}
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author='Joe Henderson jr.'
          timeAgo='7 days ago'
          text='Dude, this is awesome. Thanks so much'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author='Matt'
          timeAgo='Today at 5:42PM'
          text='How artistic!'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author='Elliot Fu'
          timeAgo='Yesterday at 12:30AM'
          text='This has been very useful for my research. Thanks as well!'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author='Joe Henderson'
          timeAgo='5 days ago'
          text='Dude, this is awesome. Thanks so much'
        />
      </ApprovalCard>

      <form className='ui reply form'>
        <div className='field'>
          <textarea></textarea>
        </div>
        <div className='ui blue labeled submit icon button'>
          <i className='icon edit'></i> Add Reply
        </div>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
