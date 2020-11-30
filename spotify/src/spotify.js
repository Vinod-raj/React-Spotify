// here we are using the spotify authentication

export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId="6561c29c9fc14e5886676b21cc7cb189";

// this scope is really important
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// the below method is to extract the token from the url after authentication

export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1).split('&')
    .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial
    }, {});
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
