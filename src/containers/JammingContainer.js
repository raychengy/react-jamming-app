import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import AppPlaylist from '../components/AppPlaylist';

class JammingContainer extends Component {
  state = {
    userPlaylist: [
      {
        song: 'Stronger',
        artist: 'Britney Spears',
        album: 'Oops!... I Did It Again',
      },
      {
        song: 'So Emotional',
        artist: 'Whitney Houston',
        album: 'Whitney',
      },
      {
        song: 'It\'s Not Right But It\'s Okay',
        artist: 'Whitney Houston',
        album: 'My Love Is Your Love',
      }
    ],
    searchResults: [
      {
        song: 'Tiny Dancer',
        artist: 'Elton John',
        album: 'Madman Across The Water',
      },
      {
        song: 'Tiny Dancer',
        artist: 'Tim McGraw',
        album: 'Love Story',
      },
      {
        song: 'Tiny Dancer',
        artist: 'Rockabye Baby!',
        album: 'Lullaby Renditions of Elton John',
      },
      {
        song: 'Tiny Dancer',
        artist: 'The White Raven',
        album: 'Tiny Dancer',
      },
      {
        song: 'Tiny Dancer',
        artist: 'Ben Folds',
        album: 'Ben Folds Live',
      }
    ],
  }
  onSearch = searchTerm => {
    console.log(searchTerm);
  }
  onAddSong = songId => {
    console.log(songId);
  }
  onRemoveSong = songId => {
    console.log(songId);
  }
  render() {
    const { searchResults, userPlaylist } = this.state;
    return (
      <div className="App">
        <SearchBar onSearch={this.onSearch} />
        <AppPlaylist {...{
          searchResults,
          userPlaylist,
          onAddSong: this.onAddSong,
          onRemoveSong: this.onRemoveSong
        }} />
      </div>
    );
  }
}

export default JammingContainer;
