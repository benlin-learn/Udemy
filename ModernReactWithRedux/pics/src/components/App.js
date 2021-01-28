import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '', images: [] };
  }
  onSearchSubmit = async (term) => {
    // console.log(term);
    this.setState({ searchTerm: term });
    const res = await axios.get(
      `https://api.unsplash.com/search/photos/?query=${term}`,
      {
        // params:{query: term},
        headers: {
          Authorization: 'Client-ID PVZluRdjbZ0mUzLTFGIlEIxc0kAaDzgQ-Iaug7BJax4'
        }
      }
    );

    this.setState({ images: res.data.results });

    // .then((res) => {
    //   for (let i = 0; i < res.data.results.length; i++) {
    //     console.log(res.data.results[i]);
    //   }
    //   // console.log(res.data.results);
    // });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h1>{this.state.searchTerm}</h1>
        {/* <ImageList /> */}
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
