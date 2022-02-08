import { connect } from 'react-redux';
import { selectSong } from '../actions';


const SongList = (props) => {

  const selectorHandler = (song) => {

    props.selectSong(song)

  }

  const renderList = () => {
    return props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={selectorHandler.bind(null, song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  return (
    <div className='ui divided list'>
      {renderList()}
    </div>
  )
};

const mapStateToProps = (state) => {
  console.log(state);
  
  return state
}


export default connect(mapStateToProps, {selectSong}) (SongList);
