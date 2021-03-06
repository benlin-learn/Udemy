import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <div className='ui embed'>
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameborder='0'
          title='video player'
        ></iframe>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
