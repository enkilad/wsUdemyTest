import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Smells Like Teen Spirit', duration: '3:33' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Stars', duration: '3:15' },
    { title: 'I Want It That Way', duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
