import React from 'react';

import SearchResults from './SearchResults';
import Playlist from './Playlist';

const AppPlaylist = props => {
  const { searchResults, userPlaylist, onAddTrack, onRemoveTrack, onSaveUserPlaylist } = props;
  return (
    <div className="App-playlist">
      <SearchResults {...{ searchResults, onAddTrack, keyPrefix: 'search-results-' }} />
      <Playlist {...{ userPlaylist, onRemoveTrack, onSaveUserPlaylist, keyPrefix: 'playlist-' }} />
    </div>
  );
};

export default AppPlaylist;
