import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID PVZluRdjbZ0mUzLTFGIlEIxc0kAaDzgQ-Iaug7BJax4'
  }
});
