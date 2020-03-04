import React from 'react';

import SearchResults from './SearchResults';
import Playlist from './Playlist';

const AppPlaylist = props => {
    const {
        searchResults,
        userPlaylist,
        onAddSong,
        onRemoveSong
    } = props;
    return (
        <div className="App-playlist">
            <SearchResults {...{ searchResults, onAddSong }} />
            <Playlist {...{ userPlaylist, onRemoveSong }} />
        </div>
    );
}

export default AppPlaylist;