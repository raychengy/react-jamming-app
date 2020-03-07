import React from 'react';

const Track = props => {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.name}</h3>
        <p>{`${props.artist} | ${props.album}`}</p>
      </div>
      <button className="Track-action" onClick={() => props.onClick(props.id)}>
        {props.btnIcon}
      </button>
    </div>
  );
};

export default Track;
