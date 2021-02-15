import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  //input onChange
  onInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    // prevent from auto trigger auto submit form
    e.preventDefault();
    // console.log(this.state.term);

    // TODO: Make sure we call
    // callback from parent component
    this.props.onTermSubmit(this.state.term);
    // reset input form
    // this.setState({ term: '' });
  };
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label htmlFor=''>Video Search: </label>
            <input
              value={this.state.term}
              type='text'
              // onChange={(e) => {
              //   this.setState({ term: e.target.value });
              // }}
              onChange={this.onInputChange}
              placeholder='Search...'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
