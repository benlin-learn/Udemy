import './App.css';

import React from 'react';

import youtube from '../api/youtube';

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
  }
  componentDidMount() {
    this.onTermSubmit('news');
  }

  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: { q: term }
    });
    // console.log(res);
    console.log(res.data.items);

    // set data (get from api ) to 'state' using setState
    await this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    });

    console.log(this.state.videos[0].snippet.thumbnails.default.url);
    // this.state.videos[0].snippet.thumbnails.default.url
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log('From the App: ', video);
  };

  render() {
    return (
      <div className='app ui container'>
        <SearchBar onTermSubmit={this.onTermSubmit} />

        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='video-list five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
