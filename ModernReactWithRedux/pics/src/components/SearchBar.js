import React from 'react';

class SearchBar extends React.Component {
  // One of way to handle 'this', using 'bind' to add the function ,creating a method that needs to use 'this'.
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     term: ''
  //   };
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  state = { term: '' };

  //  Second way to handle 'this',made fn onFormSubmit a arrow function
  onFormSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state.term);

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        {/* Third way to handle 'this', change the props to a arrow function and pass in the 'event' value,like below comment */}
        {/* <form className='ui form' onSubmit={(e)=>this.onFormSubmit(e)}> */}

        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label htmlFor=''>Image Search</label>
            {/* do not put parentheses cause we don't want to run it when SearchBar component every time render.*/}
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
