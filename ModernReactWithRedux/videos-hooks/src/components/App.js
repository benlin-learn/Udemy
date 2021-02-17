import './App.css';

import React, { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos('news');

  useEffect(() => {
    // setSelectedVideo(res.data.items[0]);
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className='app ui container'>
      <SearchBar onTermSubmit={search} />

      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='video-list five wide column'>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
