import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import AppPlaylist from '../components/AppPlaylist';

class JammingContainer extends Component {
  state = {
    userPlaylist: [
      {
        id: 'abc1',
        song: 'Stronger',
        artist: 'Britney Spears',
        album: 'Oops!... I Did It Again',
      },
      {
        id: 'abc2',
        song: 'So Emotional',
        artist: 'Whitney Houston',
        album: 'Whitney',
      },
      {

        id: 'abc3',
        song: 'It\'s Not Right But It\'s Okay',
        artist: 'Whitney Houston',
        album: 'My Love Is Your Love',
      }
    ],
    searchResults: [
      {
        id: 'abc4',
        song: 'Tiny Dancer',
        artist: 'Elton John',
        album: 'Madman Across The Water',
      },
      {
        id: 'abc5',
        song: 'Tiny Dancer',
        artist: 'Tim McGraw',
        album: 'Love Story',
      },
      {
        id: 'abc6',
        song: 'Tiny Dancer',
        artist: 'Rockabye Baby!',
        album: 'Lullaby Renditions of Elton John',
      },
      {
        id: 'abc7',
        song: 'Tiny Dancer',
        artist: 'The White Raven',
        album: 'Tiny Dancer',
      },
      {
        id: 'abc8',
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
    const { searchResults } = this.state;
    const track = searchResults.find(track => track.id === songId);
    if (track) this.setState({ userPlaylist: [...this.state.userPlaylist, track] })
  }
  onRemoveSong = songId => {
    const { userPlaylist } = this.state;
    this.setState({ userPlaylist: userPlaylist.filter(track => track.id !== songId) });
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
