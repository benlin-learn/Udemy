import React from 'react';

import unsplash from '../api/unsplash';

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
    const res = await unsplash.get(`/search/photos`, {
      params: { query: term }
    });

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
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
