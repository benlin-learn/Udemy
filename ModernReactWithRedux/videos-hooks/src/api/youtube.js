import axios from 'axios';

const KEY = 'AIzaSyBIL8gPJjW36g4Te4YGMzQJI4xAC6mYLxE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
