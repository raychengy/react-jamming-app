import React from 'react';
import Track from './Track';

const TrackList = props => {
    const { trackList, onClick, btnIcon } = props;
    return (
        <div className="TrackList">
            {trackList.map(
                ({ song, artist, album, id }, i) =>
                    <Track
                        key={`track-${i}`}
                        {...{ song, artist, album, id, onClick, btnIcon }}
                    />
            )}
        </div>
    );
}

export default TrackList;