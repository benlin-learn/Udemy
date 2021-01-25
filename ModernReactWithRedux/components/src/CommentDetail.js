import React from 'react';
// import faker from 'faker';

const CommentDetail = (props) => {
  return (
    <div className='comment'>
      <a className='avatar'>
        <img src={props.avatar} />
      </a>
      <div className='content'>
        <a className='author'>{props.author}</a>
        <div className='metadata'>
          <span className='date'>Today at {props.timeAgo}</span>
        </div>
        <div className='text'>{props.text}</div>
        {/* <div className='actions'>
          <a className='reply'>Reply</a>
        </div> */}
      </div>
    </div>
  );
};

export default CommentDetail;
