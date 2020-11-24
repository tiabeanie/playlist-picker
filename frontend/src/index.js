const BASE_URL = "http://localhost:3000"
const SONGS_URL = `${BASE_URL}/songs`
const PLAYLISTS_URL = `${BASE_URL}/playlists`
const USERS_URL = `${BASE_URL}/users`

const playlistCollection = document.querySelector('#playlist-collection')
const favCollection = document.querySelector('#song-collection')
const signupForm = document.querySelector('#signup-form')
const signupInputs = document.querySelectorAll(".signup-input")
const logout = document.querySelector('.logout')

// Song Class //

class Song {
    constructor(songAttributes) {
        this.title = 
        this.artist
        this.genre
    }
}

// Playlist Class // 