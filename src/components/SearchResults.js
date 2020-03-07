import React from 'react';

import TrackList from './TrackList';

const SearchResults = props => {
  const { searchResults: trackList, onAddTrack, keyPrefix } = props;

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList trackList={trackList} keyPrefix={keyPrefix} onClick={onAddTrack} btnIcon={'+'} />
    </div>
  );
};

export default SearchResults;
