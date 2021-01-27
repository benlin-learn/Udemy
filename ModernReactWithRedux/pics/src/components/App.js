import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }
  onSearchSubmit = (term) => {
    console.log(term);
    this.setState({ searchTerm: term });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h1>{this.state.searchTerm}</h1>
      </div>
    );
  }
}

export default App;
