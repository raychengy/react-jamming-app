import React, { useState, useEffect } from 'react';

import TrackList from './TrackList';

const Playlist = props => {
  const { userPlaylist: trackList, onRemoveTrack, keyPrefix, onSaveUserPlaylist } = props;
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const isBtnDisabled = trackList.length === 0;
  const onChange = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setPlaylistName(value);
  };

  useEffect(() => {
    if (trackList.length === 0) setPlaylistName('New Playlist');
  }, [trackList.length]);

  return (
    <div className="Playlist">
      <input value={playlistName} onChange={onChange} />
      <TrackList trackList={trackList} keyPrefix={keyPrefix} onClick={onRemoveTrack} btnIcon={'-'} />
      <button className="Playlist-save" disabled={isBtnDisabled} onClick={() => onSaveUserPlaylist(playlistName)}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
