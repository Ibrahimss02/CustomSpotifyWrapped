import querystring from "querystring";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const DEVICE_ENDPOINT = `https://api.spotify.com/v1/me/player`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
  const basic = "YzY3ZGE3NDNkMjUyNGE2NmFiMDAyMDYyNDk5NGY5Y2I6NTRhMDY3NDc0NzhkNDJkZmE0ZDgzN2FmZTM3NDM3YTQ=";

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async (client_id, client_secret, refresh_token) => {
  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    refresh_token
  );

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getDevice = async (client_id, client_secret, refresh_token) => {
  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    refresh_token
  );

  return fetch(DEVICE_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}

export default async function getNowPlayingItem(
  client_id,
  client_secret,
  refresh_token
) {
  const response = await getNowPlaying(client_id, client_secret, refresh_token);
  const deviceResponse = await getDevice(client_id, client_secret, refresh_token);
  if (response.status === 204 || response.status > 400) {
    return false;
  }

  const result = await response.json();
  const deviceResult = await deviceResponse.json();
  const albumImageUrl = result.item.album.images[0].url;
  const artist = result.item.artists.map((_artist) => _artist.name).join(", ");
  const isPlaying = result.is_playing;
  const songUrl = result.item.external_urls.spotify;
  const title = result.item.name;
  const device = deviceResult.device.name;
  const deviceType = deviceResult.device.type;

  return {
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
    device,
    deviceType,
  };
}