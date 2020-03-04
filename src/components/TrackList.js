import React from 'react';
import Track from './Track';

const TrackList = props => {
    const { trackList, onClick, btnIcon } = props;
    return (
        <div className="TrackList">
            {trackList.map(
                ({ song, artist, album }, i) =>
                    <Track
                        key={`track-${i}`}
                        {...{ song, artist, album, onClick, btnIcon }}
                    />
            )}
        </div>
    );
}

export default TrackList;