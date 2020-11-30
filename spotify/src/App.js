import './App.css';
import  Login  from './Components/Login/Login'
import React, {useEffect} from 'react'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player/Player';
import { useDataLayerValue } from './Context/DataLayer';


// spotify web api is a awrapper which is very usefull to ineract with spotify api
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    //this is to clear off the token from url for security ourpose
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      spotify.setAccessToken(_token);//giving access token to the spotify api for interaction
      spotify.getMe().then(user=>{
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
      spotify.getUserPlaylists().then(playlists =>{
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      });
      // we have copied the id from the url of original spotify for discover weekly and passing as over here
      spotify.getPlaylist('37i9dQZEVXcCJqtldkMcVl')
      .then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })
    }
  }, []);

  
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        )
        :
        (
          <Login />
        )
      }
    </div>
  );
}

export default App;
