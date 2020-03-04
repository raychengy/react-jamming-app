import React, { useState } from 'react';

import TrackList from './TrackList';

const Playlist = props => {
    const { userPlaylist: trackList, onRemoveSong } = props;
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const onChange = e => {
        e.preventDefault();
        const { value } = e.currentTarget;
        setPlaylistName(value);
    };

    return (
        <div className="Playlist">
            <input value={playlistName} onChange={onChange} />
            <TrackList trackList={trackList} onClick={onRemoveSong} btnIcon={'-'} />
            <button className="Playlist-save" href="/#">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;