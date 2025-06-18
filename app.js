const musicData = {
  artists: [
    {
      id: 'lana-del-rey',
      name: 'Lana Del Rey',
      image: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/assets/artists/lanadelrey/lanadelrey.jpg',
      albums: [
        {
          id: 'honeymoon',
          name: 'Honeymoon',
          year: '',
          cover: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/assets/albums/lanadelrey/honeymoon/honeymoon.jpg',
          tracks: [
            { id: 1, title: '24', duration: '4:55', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/24.mp3' },
            { id: 2, title: 'Art Deco', duration: '4:55', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/Art Deco.mp3' },
            { id: 3, title: 'Burnt Norton (Interlude)', duration: '1:21', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/Burnt Norton (Interlude).mp3' },
            { id: 4, title: 'Don t Let Me Be Misunderstood' , duration: '3:01', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/Don t Let Me Be Misunderstood.mp3' },
            { id: 5, title: 'God Knows I Tried', duration: '4:40', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/God Knows I Tried.mp3' },
            { id: 6, title: 'LANA DEL REY - HONEYMOON', duration: '5:54', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/LANA DEL REY - HONEYMOON.mp3' },
            { id: 7, title: 'Lana Del Rey - Freak', duration: '10:52', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/Lana Del Rey - Freak.mp3' },
            { id: 8, title: 'Lana Del Rey - High By The Beach (Official Audio)', duration: '4:18', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/Lana Del Rey - High By The Beach (Official Audio).mp3' },
            { id: 9, title: 'Lana Del Rey - High By The Beach', duration: '4:57', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/Lana Del Rey - High By The Beach.mp3' },
            { id: 10, title: 'Lana Del Rey - Music To Watch Boys To', duration: '4:54', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/Lana Del Rey - Music To Watch Boys To.mp3' },
            { id: 11, title: 'Lana Del Rey - Terrence Loves You (Official Audio)', duration: '4:51', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/Lana Del Rey - Terrence Loves You (Official Audio).mp3' },
            { id: 12, title: 'Religion', duration: '5:23', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/Religion.mp3' },
            { id: 13, title: 'Salvatore', duration: '4:41', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/Salvatore.mp3' },
            { id: 14, title: 'Swan Song', duration: '5:23', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/Swan Song.mp3' },
            { id: 15, title: 'The Blackest Day', duration: '6:05', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Lana Del Rey/Honeymoon/The Blackest Day.mp3' },
          ]
        },
      ]
    },
  ]
};

// Estado da aplicação
let currentView = 'artists';
let currentArtist = null;
let currentAlbum = null;
let currentTrack = null;
let currentPlaylist = [];
let currentTrackIndex = 0;
let isPlaying = false;

// Elementos DOM
const elements = {
    // Views
    artistsView: document.getElementById('artistsView'),
    albumsView: document.getElementById('albumsView'),
    tracksView: document.getElementById('tracksView'),
    
    // Grids
    artistsGrid: document.getElementById('artistsGrid'),
    albumsGrid: document.getElementById('albumsGrid'),
    tracksContainer: document.getElementById('tracksContainer'),
    
    // Navigation
    breadcrumb: document.getElementById('breadcrumb'),
    backToArtists: document.getElementById('backToArtists'),
    backToAlbums: document.getElementById('backToAlbums'),
    
    // Album header
    albumsTitle: document.getElementById('albumsTitle'),
    albumHeader: document.getElementById('albumHeader'),
    albumCoverLarge: document.getElementById('albumCoverLarge'),
    albumTitle: document.getElementById('albumTitle'),
    albumArtist: document.getElementById('albumArtist'),
    playAllBtn: document.getElementById('playAllBtn'),
    
    // Audio player
    audioPlayer: document.getElementById('audioPlayer'),
    audioElement: document.getElementById('audioElement'),
    playerCover: document.getElementById('playerCover'),
    playerTitle: document.getElementById('playerTitle'),
    playerArtist: document.getElementById('playerArtist'),
    playPauseBtn: document.getElementById('playPauseBtn'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    progressBar: document.getElementById('progressBar'),
    progressFill: document.getElementById('progressFill'),
    currentTime: document.getElementById('currentTime'),
    totalTime: document.getElementById('totalTime'),
    
    // Theme toggle
    themeToggle: document.getElementById('themeToggle')
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initializeFeatherIcons();
    initializeTheme();
    setupEventListeners();
    showArtists();
});

function initializeFeatherIcons() {
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('databeat-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const icon = elements.themeToggle.querySelector('i');
    if (icon) {
        icon.setAttribute('data-feather', theme === 'dark' ? 'sun' : 'moon');
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

function setupEventListeners() {
    // Navigation
    elements.backToArtists.addEventListener('click', showArtists);
    elements.backToAlbums.addEventListener('click', () => showAlbums(currentArtist));
    
    // Audio player controls
    elements.playPauseBtn.addEventListener('click', togglePlayPause);
    elements.prevBtn.addEventListener('click', playPrevious);
    elements.nextBtn.addEventListener('click', playNext);
    elements.playAllBtn.addEventListener('click', playAllTracks);
    
    // Progress bar
    elements.progressBar.addEventListener('click', seekTo);
    
    // Audio element events
    elements.audioElement.addEventListener('loadedmetadata', updateDuration);
    elements.audioElement.addEventListener('timeupdate', updateProgress);
    elements.audioElement.addEventListener('ended', playNext);
    elements.audioElement.addEventListener('play', () => {
        isPlaying = true;
        updatePlayPauseButton();
    });
    elements.audioElement.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayPauseButton();
    });
    
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('databeat-theme', newTheme);
    updateThemeIcon(newTheme);
}

// View functions
function showView(viewName) {
    // Hide all views
    elements.artistsView.classList.add('hidden');
    elements.albumsView.classList.add('hidden');
    elements.tracksView.classList.add('hidden');
    
    // Show target view
    switch(viewName) {
        case 'artists':
            elements.artistsView.classList.remove('hidden');
            break;
        case 'albums':
            elements.albumsView.classList.remove('hidden');
            break;
        case 'tracks':
            elements.tracksView.classList.remove('hidden');
            break;
    }
    
    currentView = viewName;
}

function updateBreadcrumb() {
    const breadcrumbHTML = [];
    
    if (currentView === 'artists') {
        breadcrumbHTML.push('<span class="breadcrumb-item active">Artistas</span>');
    } else {
        breadcrumbHTML.push('<span class="breadcrumb-item" onclick="showArtists()">Artistas</span>');
        
        if (currentArtist) {
            if (currentView === 'albums') {
                breadcrumbHTML.push(`<span class="breadcrumb-item active">${currentArtist.name}</span>`);
            } else {
                breadcrumbHTML.push(`<span class="breadcrumb-item" onclick="showAlbums('${currentArtist.id}')">${currentArtist.name}</span>`);
                
                if (currentAlbum) {
                    breadcrumbHTML.push(`<span class="breadcrumb-item active">${currentAlbum.name}</span>`);
                }
            }
        }
    }
    
    elements.breadcrumb.innerHTML = breadcrumbHTML.join('');
}

function showArtists() {
    currentArtist = null;
    currentAlbum = null;
    
    showView('artists');
    updateBreadcrumb();
    
    const artistsHTML = musicData.artists.map(artist => `
        <div class="card" onclick="showAlbums('${artist.id}')">
            <img class="card-image" src="${artist.image}" alt="${artist.name}" onerror="this.style.background='linear-gradient(135deg, var(--dark-purple), var(--primary-purple))'; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiM2MzY2ZjEiLz48L3N2Zz4='" />
            <h3 class="card-title">${artist.name}</h3>
            <p class="card-subtitle">${artist.albums.length} álbum${artist.albums.length !== 1 ? 's' : ''}</p>
        </div>
    `).join('');
    
    elements.artistsGrid.innerHTML = artistsHTML;
}

function showAlbums(artistId) {
    const artist = musicData.artists.find(a => a.id === artistId);
    if (!artist) return;
    
    currentArtist = artist;
    currentAlbum = null;
    
    showView('albums');
    updateBreadcrumb();
    
    elements.albumsTitle.textContent = `Álbuns de ${artist.name}`;
    
    const albumsHTML = artist.albums.map(album => `
        <div class="card" onclick="showTracks('${artistId}', '${album.id}')">
            <img class="card-image" src="${album.cover}" alt="${album.name}" onerror="this.style.background='linear-gradient(135deg, var(--dark-purple), var(--primary-purple))'; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiM4YjVjZjYiLz48L3N2Zz4='" />
            <h3 class="card-title">${album.name}</h3>
            <p class="card-subtitle">${album.year} • ${album.tracks.length} faixa${album.tracks.length !== 1 ? 's' : ''}</p>
        </div>
    `).join('');
    
    elements.albumsGrid.innerHTML = albumsHTML;
}

function showTracks(artistId, albumId) {
    const artist = musicData.artists.find(a => a.id === artistId);
    if (!artist) return;
    
    const album = artist.albums.find(a => a.id === albumId);
    if (!album) return;
    
    currentArtist = artist;
    currentAlbum = album;
    
    showView('tracks');
    updateBreadcrumb();
    
    // Update album header
    elements.albumCoverLarge.src = album.cover;
    elements.albumCoverLarge.onerror = function() {
        this.style.background = 'linear-gradient(135deg, var(--dark-purple), var(--primary-purple))';
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI1MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiM4YjVjZjYiLz48L3N2Zz4=';
    };
    elements.albumTitle.textContent = album.name;
    elements.albumArtist.textContent = artist.name;
    
    // Create tracks list
    const tracksHTML = album.tracks.map((track, index) => `
        <div class="track-item" onclick="playTrack(${index})" data-track-index="${index}">
            <span class="track-number">${track.id}</span>
            <div class="track-info">
                <div class="track-title">${track.title}</div>
                <div class="track-duration">${track.duration}</div>
            </div>
            <button class="track-play-btn" onclick="event.stopPropagation(); playTrack(${index})">
                <i data-feather="play"></i>
            </button>
        </div>
    `).join('');
    
    elements.tracksContainer.innerHTML = tracksHTML;
    
    // Update current playlist
    currentPlaylist = album.tracks.map((track, index) => ({
        ...track,
        artist: artist.name,
        album: album.name,
        cover: album.cover,
        index
    }));
    
    initializeFeatherIcons();
}

// Audio player functions
function playTrack(trackIndex) {
    if (!currentPlaylist.length) return;
    
    currentTrackIndex = trackIndex;
    const track = currentPlaylist[trackIndex];
    
    // Update audio source
    elements.audioElement.src = track.url;
    
    // Update player UI
    elements.playerCover.src = track.cover;
    elements.playerCover.onerror = function() {
        this.style.background = 'linear-gradient(135deg, var(--dark-purple), var(--primary-purple))';
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiM4YjVjZjYiLz48L3N2Zz4=';
    };
    elements.playerTitle.textContent = track.title;
    elements.playerArtist.textContent = track.artist;
    
    // Show player
    elements.audioPlayer.classList.remove('hidden');
    
    // Update track list UI
    updateTrackListUI();
    
    // Play the track
    elements.audioElement.play().catch(e => {
        console.log('Erro ao reproduzir:', e);
    });
    
    currentTrack = track;
}

function playAllTracks() {
    if (currentPlaylist.length > 0) {
        playTrack(0);
    }
}

function togglePlayPause() {
    if (!currentTrack) return;
    
    if (isPlaying) {
        elements.audioElement.pause();
    } else {
        elements.audioElement.play().catch(e => {
            console.log('Erro ao reproduzir:', e);
        });
    }
}

function playPrevious() {
    if (currentPlaylist.length === 0) return;
    
    const prevIndex = currentTrackIndex > 0 ? currentTrackIndex - 1 : currentPlaylist.length - 1;
    playTrack(prevIndex);
}

function playNext() {
    if (currentPlaylist.length === 0) return;
    
    const nextIndex = currentTrackIndex < currentPlaylist.length - 1 ? currentTrackIndex + 1 : 0;
    playTrack(nextIndex);
}

function updatePlayPauseButton() {
    const icon = elements.playPauseBtn.querySelector('i');
    if (icon) {
        icon.setAttribute('data-feather', isPlaying ? 'pause' : 'play');
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

function updateTrackListUI() {
    const trackItems = document.querySelectorAll('.track-item');
    trackItems.forEach((item, index) => {
        if (index === currentTrackIndex) {
            item.classList.add('playing');
            const playBtn = item.querySelector('.track-play-btn i');
            if (playBtn) {
                playBtn.setAttribute('data-feather', isPlaying ? 'pause' : 'play');
            }
        } else {
            item.classList.remove('playing');
            const playBtn = item.querySelector('.track-play-btn i');
            if (playBtn) {
                playBtn.setAttribute('data-feather', 'play');
            }
        }
    });
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function updateDuration() {
    const duration = elements.audioElement.duration;
    if (!isNaN(duration)) {
        elements.totalTime.textContent = formatTime(duration);
    }
}

function updateProgress() {
    const currentTime = elements.audioElement.currentTime;
    const duration = elements.audioElement.duration;
    
    if (!isNaN(currentTime) && !isNaN(duration)) {
        const progress = (currentTime / duration) * 100;
        elements.progressFill.style.width = `${progress}%`;
        elements.currentTime.textContent = formatTime(currentTime);
    }
}

function seekTo(e) {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    
    const duration = elements.audioElement.duration;
    if (!isNaN(duration)) {
        elements.audioElement.currentTime = duration * percentage;
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Global functions for onclick handlers
window.showAlbums = showAlbums;
window.showTracks = showTracks;
window.playTrack = playTrack;
window.showArtists = showArtists;