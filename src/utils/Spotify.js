let accessToken;
let expiresIn;
const client_id = process.env.REACT_APP_SPOTIFY_CLIENTID;
const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const accountUrl = 'https://accounts.spotify.com';
const apiUrl = 'https://api.spotify.com';

export const addTracksToPlaylist = (playlistId, tracks) => {
  const tracksUri = tracks.map(track => track.uri).join(',');
  const url = `${apiUrl}/v1/playlists/${playlistId}/tracks?uris=${tracksUri}`;

  return fetch(url, { method: 'POST', headers: { Authorization: `Bearer ${accessToken}` } });
};

export const createPlaylist = (playlistName, userId) => {
  const url = `${apiUrl}/v1/users/${userId}/playlists`;

  return fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: playlistName })
  })
    .then(res => res.json())
    .then(({ id }) => id);
};

export const getAccessToken = () => {
  // if token is present already, return it
  if (accessToken) return accessToken;
  // Try getting access token via URL
  getAccessTokenViaURL();
};

export const getAccessTokenViaURL = () => {
  // parse the url for token
  const url = window.location.href;

  if (url.match(/access_token=([^&]*)/)) {
    [accessToken, expiresIn] = parseUrlForAccessToken(url);
    // setup expiration with token
    window.setTimeout(() => {
      accessToken = '';
    }, expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');
  } else {
    // if all else fails, then get authorization
    redirectForAuth();
  }
};

export const getUserId = () => {
  return fetch(`${apiUrl}/v1/me`, { headers: { Authorization: `Bearer ${accessToken}` } })
    .then(res => res.json())
    .then(({ id }) => id);
};

export const parseUrlForAccessToken = url => {
  const token = url.match(/access_token=([^&]*)/)[1];
  const expiration = url.match(/expires_in=([^&]*)/)[1];

  return [token, expiration];
};

export const parseTrack = track => {
  const { uri, id, name, artists, album } = track;

  return {
    uri,
    id,
    name,
    artist: artists[0].name,
    album: album.name
  };
};

export const redirectForAuth = () => {
  const redirectUrl =
    `${accountUrl}/authorize?client_id=${client_id}` +
    `&redirect_uri=${redirectUri}&response_type=token&scope=playlist-modify-public`;
  window.location = redirectUrl;
};

export const search = searchTerm => {
  const url = `${apiUrl}/v1/search?type=track&q=${searchTerm}`;

  return fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } })
    .then(res => res.json())
    .then(({ tracks }) => (tracks ? tracks.items.map(track => parseTrack(track)) : []));
};

export const savePlaylist = (playlistName, tracks) => {
  if (!playlistName || !tracks) return;

  return getUserId()
    .then(userId => createPlaylist(playlistName, userId))
    .then(playlistId => addTracksToPlaylist(playlistId, tracks));
};
