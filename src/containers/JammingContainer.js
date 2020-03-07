import React, { Component } from 'react';

import * as Spotify from '../utils/Spotify';

import SearchBar from '../components/SearchBar';
import AppPlaylist from '../components/AppPlaylist';

class JammingContainer extends Component {
  componentDidMount() {
    Spotify.getAccessToken();
  }
  state = {
    userPlaylist: [],
    searchResults: []
  };
  onSearch = searchTerm => {
    Spotify.search(searchTerm).then(tracks => {
      this.setState({ searchResults: tracks });
    });
  };
  onAddTrack = trackId => {
    const { searchResults, userPlaylist } = this.state;
    const searchTrack = searchResults.find(track => track.id === trackId);
    if (searchTrack && !userPlaylist.find(track => track.id === searchTrack.id)) {
      this.setState({ userPlaylist: [...userPlaylist, searchTrack] });
    }
  };
  onRemoveTrack = trackId => {
    const { userPlaylist } = this.state;
    this.setState({ userPlaylist: userPlaylist.filter(track => track.id !== trackId) });
  };
  onSaveUserPlaylist = playlistName => {
    Spotify.savePlaylist(playlistName, this.state.userPlaylist).then(() => {
      this.setState({ userPlaylist: [] });
    });
  };
  render() {
    const { searchResults, userPlaylist } = this.state;
    return (
      <div className="App">
        <SearchBar onSearch={this.onSearch} />
        <AppPlaylist
          {...{
            searchResults,
            userPlaylist,
            onAddTrack: this.onAddTrack,
            onRemoveTrack: this.onRemoveTrack,
            onSaveUserPlaylist: this.onSaveUserPlaylist
          }}
        />
      </div>
    );
  }
}

export default JammingContainer;
