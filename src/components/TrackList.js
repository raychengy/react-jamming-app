import React from 'react';
import Track from './Track';

const TrackList = props => {
  const { trackList, onClick, btnIcon, keyPrefix } = props;
  return (
    <div className="TrackList">
      {trackList.map(({ name, artist, album, id }) => (
        <Track key={`${keyPrefix}${id}`} {...{ name, artist, album, id, onClick, btnIcon }} />
      ))}
    </div>
  );
};

export default TrackList;
