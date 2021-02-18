import React, { Component } from 'react';
import { connect } from 'react-redux';
// action
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // this.props === {songs: state.songs}
    // console.log(this.props);
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

// any time we change our redux state, or rerun our reducers and produce some new state object, the mapStateToProps this function is going to rerun with the newly created state object
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
