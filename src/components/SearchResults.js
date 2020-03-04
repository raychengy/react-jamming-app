import React from 'react';

import TrackList from './TrackList';

const SearchResults = props => {
    const { searchResults: trackList, onAddSong } = props;

    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList
                trackList={trackList}
                onClick={onAddSong}
                btnIcon={'+'}
            />
        </div>
    );
}

export default SearchResults;