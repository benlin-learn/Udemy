import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
      <img
        alt={video.snippet.title}
        className='ui image'
        src={video.snippet.thumbnails.default.url}
      />
      <div className='video-item-content content '>
        <div className='header' href='#link'>
          <p className='ellipsis'>{video.snippet.title}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
