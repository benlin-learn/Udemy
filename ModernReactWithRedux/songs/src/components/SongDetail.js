import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  console.log(selectedSong);
  // if(!selectedSong){
  //   return <div>Select A Song</div>
  // }
  return (
    <div>
      <h3 className='ui header'>Details For:</h3>

      {selectedSong && (
        <Fragment>
          <p>
            Title: {selectedSong.title}
            <br />
            Duration: {selectedSong.duration}
          </p>
        </Fragment>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
