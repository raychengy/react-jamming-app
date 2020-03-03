import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import Playlist from '../components/Playlist';

class JammingContainer extends Component {
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div>
          <SearchBar />
          <Playlist />
        </div>
      </div>
    );
  }
}

export default JammingContainer;
