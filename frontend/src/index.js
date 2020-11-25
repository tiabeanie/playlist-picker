const BASE_URL = "http://localhost:3000"
const SONGS_URL = `${BASE_URL}/songs`
const PLAYLISTS_URL = `${BASE_URL}/playlists`
const USERS_URL = `${BASE_URL}/users`

const playlistCollection = document.querySelector('#playlist-collection')
const songCollection = document.querySelector('#song-collection')
const signupForm = document.querySelector('#signup-form')
const signupInputs = document.querySelectorAll(".signup-input")
const logout = document.querySelector('.logout')


class Song {
    constructor(songAttributes) {
        this.title = songAttributes.title;
        this.artist = songAttributes.artist;
        this.genre = songAttributes.genre;
        this.id = songAttributes.id;
    }

    render() {
        return `<div class="card">
                  <h2>${this.title} ($${this.artist})</h2>
                  <h4 class="song-genre">${this.genre}</h4>
                  <button data-song-id=${this.id} class="like-btn">♡</button>
                </div>`
    }

}

function putSongsOnDom(songArray){
    songCollection.innerHTML = `<h2 class="subheader">All Songs</h2>
                                <h4 class="favorites-link">View My Playlist ♡</h4>`
    songArray.forEach(song => {
        songCollection.innerHTML += new Song(song).render()
    })
}

function putPlaylistsOnDom(playlistArray){
    playlistCollection.innerHTML = `<h2 class="subheader">My Playlist</h2>
                               <h4 class="back-link">←Back to Songs</h4>`
    playlistArray.forEach(playlist => {
        playlistCollection.innerHTML += `<div class="card">
          <h2>${playlist.song.title} ($${playlist.song.artist})</h2>
          <h4 class="song-genre">${playlist.song.gere}</h4>
          <button data-song-id=${favorite.song.id} class="like-btn" style="color:red;">♡</button>
        </div>`
    })
}

function fetchSongs(){
    fetch(SONGS_URL)
    .then(res => res.json())
    .then(songs => putSongsOnDom(songs))
}

function fetchPlaylists(){
    fetch(PLAYLISTS_URL)
    .then(res => res.json())
    .then(playlists => putPlaylistsOnDom(playlists))
}

signupForm.addEventListener('submit', function(e){
    e.preventDefault()
    fetch(USERS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            user: {
                email: signupInputs[0].value,
                password: signupInputs[1].value
            }
        })
    })
    .then(res => res.json())
    .then(function(object){
        if (object.message) {
            alert(object.message)
        }
        else {
        loggedInUser(object)
        }
    }
    )
})

songCollection.addEventListener('click', function(e) {
    if (event.target.className == "playlists-link") {
        songCollection.style.display = 'none';
        fetchPlaylists();
        playlistCollection.style.display = 'initial';
    }
})

playlistCollection.addEventListener('click', function(e) {
    if (event.target.className == "back-link") {
        playlistCollection.style.display = 'none';
        songCollection.style.display = 'initial';
    }
})

function loggedInUser(object){
    currentUser = object
    signupForm.style.display = 'none'
    welcome.innerHTML = `<h3>Hello, <i>${currentUser.name}</i> !</h3>`
    logout.innerText = "Logout"
    fetchGifts()
}

songCollection.addEventListener('click', function(e){
    if ((event.target.className == "like-btn") && (event.target.style.color !== 'red')) {
        let target = event.target
            fetch(PLAYLISTS_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                        user_id: `${currentUser.id}`,
                        song_id: `${event.target.dataset.songId}`
                })
        })
        .then( res => res.json())
        .then( res => target.dataset.playlistId = res.id);
        event.target.style.color = 'red';}
    else if ((event.target.className == "like-btn") && (event.target.style.color == 'red')) {
        event.target.style.color = 'black';
        fetch(PLAYLISTS_URL + '/' + event.target.dataset.playlistId, {
            method: "DELETE"
        })
    }
})
