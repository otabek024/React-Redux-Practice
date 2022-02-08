import { connect } from 'react-redux';

import React from 'react';

const SongDetail = ({song}) => {
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song ? song.title : 'Select a song'}
      </p>
      <br />
      Duration: {song && song.duration}
    </div>
  )
};

const mapStateToProps = state => {
  return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);
