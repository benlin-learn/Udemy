import axios from 'axios';

const KEY = 'AIzaSyAuju82-aoYugaNr9U4t48AV6ZYQuNBHYw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
