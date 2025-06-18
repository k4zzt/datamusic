// Dados de música (seu musicData original)
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
                    year: '2015', // Adicionado ano para demonstração
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
        {
            id: 'linkin-park',
            name: 'Linkin Park',
            image: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/assets/artists/Linkin Park/LinkinPark.jpg',
            albums: [
                {
                    id: 'hybrid-theory',
                    name: 'Hybrid Theory',
                    year: '2000', // Adicionei um ano para consistência
                    cover: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/assets/albums/Linkin Park/Hybrid Theory/HybridTheory.jpg',
                    tracks: [
                        { id: 1, title: 'A Place for My Head', duration: '3:04', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Linkin Park/Hybrid Theory/A Place for My Head.mp3' },
                        { id: 2, title: 'By Myself', duration: '3:09', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Linkin Park/Hybrid Theory/By Myself.mp3' },
                        { id: 3, title: 'Crawling', duration: '3:28', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Linkin Park/Hybrid Theory/Crawling.mp3' },
                        { id: 4, title: 'Cure for the Itch', duration: '2:37', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Linkin Park/Hybrid Theory/Cure for the Itch.mp3' },
                        { id: 5, title: 'Forgotten', duration: '3:14', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Linkin Park/Hybrid Theory/Forgotten.mp3' },
                        { id: 6, title: 'High Voltage', duration: '3:45', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Linkin Park/Hybrid Theory/High Voltage.mp3' },
                        { id: 7, title: 'In the End', duration: '3:36', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Linkin Park/Hybrid Theory/In the End.mp3' },
                        { id: 8, title: 'Linkin Park - Runaway', duration: '3:03', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Linkin Park/Hybrid Theory/Linkin Park - Runaway.mp3' },
                        { id: 9, title: 'One Step Closer', duration: '2:37', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Linkin Park/Hybrid Theory/One Step Closer.mp3' },
                        { id: 10, title: 'Papercut', duration: '3:04', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Linkin Park/Hybrid Theory/Papercut.mp3' },
                        { id: 11, title: 'Points of Authority', duration: '3:20', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Linkin Park/Hybrid Theory/Points of Authority.mp3' },
                        { id: 12, title: 'Pushing Me Away', duration: '3:11', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Linkin Park/Hybrid Theory/Pushing Me Away.mp3' },
                        { id: 13, title: 'With You', duration: '3:23', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Linkin Park/Hybrid Theory/With You.mp3' },
                    ]
                },
            ]
        },
        {
            id: 'metallica',
            name: 'Metallica',
            image: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/assets/artists/Metallica/Metallica.jpg', // Corrigido o espaço no nome da imagem
            albums: [
                {
                    id: 'reload',
                    name: 'Reload',
                    year: '2020',
                    cover: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/assets/albums/Metallica/Reload/Reload.jpg',
                    tracks: [
                        { id: 1, title: 'Attitude', duration: '5:16', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Metallica/Reload/Attitude.mp3' },
                        { id: 2, title: 'Bad Seed', duration: '4:05', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Metallica/Reload/Bad Seed.mp3' },
                        { id: 3, title: 'Better Than You', duration: '5:21', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Metallica/Reload/Better Than You.mp3' },
                        { id: 4, title: 'Carpe Diem Baby', duration: '6:12', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Metallica/Reload/Carpe Diem Baby.mp3' },
                        { id: 5, title: 'Devil s Dance', duration: '5:18', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Metallica/Reload/Devil s Dance.mp3' },
                        { id: 6, title: 'Fixxxer', duration: '8:15', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Metallica/Reload/Fixxxer.mp3' },
                        { id: 7, title: 'Low Man s Lyric', duration: '7:37', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Metallica/Reload/Low Man s Lyric.mp3' },
                        { id: 8, title: 'Metallica： Fuel (Official Music Video)', duration: '4:37', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Metallica/Reload/Metallica： Fuel (Official Music Video).mp3' },
                        { id: 9, title: 'Metallica： The Memory Remains (Official Music Video)', duration: '4:38', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Metallica/Reload/Metallica： The Memory Remains (Official Music Video).mp3' },
                        { id: 10, title: 'Metallica： The Unforgiven II (Official Music Video)', duration: '6:36', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Metallica/Reload/Metallica： The Unforgiven II (Official Music Video).mp3' },
                        { id: 11, title: 'Prince Charming', duration: '6:05', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Metallica/Reload/Prince Charming.mp3' },
                        { id: 12, title: 'Slither', duration: '5:13', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Metallica/Reload/Slither.mp3' },
                        { id: 13, title: 'Where The Wild Things Are', duration: '6:54', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Metallica/Reload/Where The Wild Things Are.mp3' },
                    ]
                },
            ]
        },
        {
            id: 'twenty-one-pilots',
            name: 'twenty one pilots',
            image: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/assets/artists/twenty one pilots/twenty one pilots.jpg',
            albums: [
                {
                    id: 'blurryface',
                    name: 'blurryface',
                    year: '2017',
                    cover: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/assets/albums/twenty one pilots/blurryface/blurryface.jpg',
                    tracks: [
                        { id: 1, title: 'Doubt', duration: '3:11', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/Doubt.mp3' },
                        { id: 2, title: 'Fairly Local', duration: '3:27', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/Fairly Local.mp3' },
                        { id: 3, title: 'Goner', duration: '3:56', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/Goner.mp3' },
                        { id: 4, title: 'Heavydirtysoul', duration: '3:54', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/Heavydirtysoul.mp3' },
                        { id: 5, title: 'Hometown', duration: '3:54', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/Hometown.mp3' },
                        { id: 6, title: 'Lane Boy', duration: '4:13', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/Lane Boy.mp3' },
                        { id: 7, title: 'Message Man', duration: '4:00', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/Message Man.mp3' },
                        { id: 8, title: 'Not Today', duration: '3:58', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/Not Today.mp3' },
                        { id: 9, title: 'Polarize', duration: '3:46', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/Polarize.mp3' },
                        { id: 10, title: 'Ride', duration: '3:34', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/Ride.mp3' },
                        { id: 11, title: 'Stressed Out', duration: '3:22', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/Stressed Out.mp3' },
                        { id: 12, title: 'Tear in My Heart', duration: '3:08', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/Tear in My Heart.mp3' },
                        { id: 13, title: 'The Judge', duration: '4:57', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/The Judge.mp3' },
                        { id: 14, title: 'We Don t Believe What s on TV', duration: '2:57', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/twenty one pilots/blurryface/We Don t Believe What s on TV.mp3' },
                    ]
                },
            ]
        },
        {
            id: 'billie-eilish',
            name: 'Billie Eilish',
            image: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/assets/artists/Billie Eilish/Billie Eilish.jpg',
            albums: [
                {
                    id: 'hit-me-hard-and-soft',
                    name: 'hit me hard and soft',
                    year: '2024', // Adicionei um ano para consistência
                    cover: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/assets/albums/Billie Eilish/hit me hard and soft/hit me hard and soft.jpg',
                    tracks: [
                        { id: 1, title: 'Billie Eilish - BIRDS OF A FEATHER (Official Music Video)', duration: '3:50', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Billie Eilish/hit me hard and soft/Billie Eilish - BIRDS OF A FEATHER (Official Music Video).mp3' },
                        { id: 2, title: 'Billie Eilish - BITTERSUITE (BILLIE BY FINNEAS)', duration: '4:58', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Billie Eilish/hit me hard and soft/Billie Eilish - BITTERSUITE (BILLIE BY FINNEAS).mp3' },
                        { id: 3, title: 'Billie Eilish - BLUE (BILLIE BY FINNEAS)', duration: '5:45', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Billie Eilish/hit me hard and soft/Billie Eilish - BLUE (BILLIE BY FINNEAS).mp3' },
                        { id: 4, title: 'Billie Eilish - CHIHIRO (Official Music Video)', duration: '5:23', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Billie Eilish/hit me hard and soft/Billie Eilish - CHIHIRO (Official Music Video).mp3' },
                        { id: 5, title: 'Billie Eilish - LUNCH (Official Music Video)', duration: '3:22', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Billie Eilish/hit me hard and soft/Billie Eilish - LUNCH (Official Music Video).mp3' },
                        { id: 6, title: 'Billie Eilish - L’AMOUR DE MA VIE (BILLIE BY FINNEAS)', duration: '5:33', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Billie Eilish/hit me hard and soft/Billie Eilish - L’AMOUR DE MA VIE (BILLIE BY FINNEAS).mp3' },
                        { id: 7, title: 'Billie Eilish - SKINNY (BILLIE BY FINNEAS)', duration: '3:39', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Billie Eilish/hit me hard and soft/Billie Eilish - SKINNY (BILLIE BY FINNEAS).mp3' },
                        { id: 8, title: 'Billie Eilish - THE DINER (BILLIE BY FINNEAS)', duration: '3:06', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Billie Eilish/hit me hard and soft/Billie Eilish - THE DINER (BILLIE BY FINNEAS).mp3' },
                        { id: 9, title: 'Billie Eilish - THE GREATEST (BILLIE BY FINNEAS)', duration: '4:45', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Billie Eilish/hit me hard and soft/Billie Eilish - THE GREATEST (BILLIE BY FINNEAS).mp3' },
                        { id: 10, title: 'Billie Eilish - WILDFLOWER (BILLIE BY FINNEAS)', duration: '4:21', url: 'https://cdn.jsdelivr.net/gh/k4zzt/databeat@main/musics/Billie Eilish/hit me hard and soft/Billie Eilish - WILDFLOWER (BILLIE BY FINNEAS).mp3' },
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
let originalPlaylist = []; // Armazena a playlist original para o modo aleatório
let shuffledPlaylist = []; // Nova playlist para o modo aleatório
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffling = false; // Novo estado para o modo aleatório

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
    albumTitle: document.querySelector('#albumHeader .album-info h2'), // Seleciona o h2 dentro de album-info
    albumArtist: document.getElementById('albumArtist'),
    playAllBtn: document.getElementById('playAllBtn'),
    shuffleBtn: document.getElementById('shuffleBtn'), // Novo elemento para o botão de aleatório
    
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
    volumeIcon: document.getElementById('volumeIcon'), // Novo elemento para o ícone de volume
    volumeSlider: document.getElementById('volumeSlider'), // Novo elemento para o slider de volume
    
    // Theme toggle
    themeToggle: document.getElementById('themeToggle')
};

// Cache para SVGs
const svgCache = {};

// Função auxiliar para obter valores de variáveis CSS
function getCssVar(varName) {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}

// Função auxiliar para gerar URLs de placeholder com base no tema atual
function getPlaceholderUrl(width, height, text) {
    // Remove o '#' do início da string da cor para usar em placehold.co
    const bgColor = getCssVar('--bg-card').substring(1); 
    const textColor = getCssVar('--text-muted').substring(1); 
    return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${text}`;
}

// Função para carregar e injetar SVGs
async function loadAndInjectSvg(element, iconName) {
    if (!element) return; // Safeguard

    if (svgCache[iconName]) {
        element.innerHTML = svgCache[iconName];
        return;
    }

    try {
        const response = await fetch(`assets/ui/${iconName}.svg`);
        if (!response.ok) {
            console.error(`Erro ao carregar SVG: assets/ui/${iconName}.svg - Status: ${response.status}`);
            // Fallback: pode-se inserir um SVG de erro genérico aqui
            element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-error"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`; // Ícone de erro
            return;
        }
        const svgContent = await response.text();
        svgCache[iconName] = svgContent;
        element.innerHTML = svgContent;
    } catch (error) {
        console.error(`Falha ao carregar SVG para ${iconName}:`, error);
        element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-alert"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`; // Ícone de alerta
    }
}

// Inicialização quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    setupEventListeners();
    showArtists();

    // Carrega os ícones iniciais para o logo, tema e botões de navegação
    loadAndInjectSvg(document.getElementById('logoIcon'), 'music');
    updateThemeIcon(localStorage.getItem('databeat-theme') || 'dark'); // Carrega o ícone inicial do tema
    if (document.getElementById('backToArtistsIcon')) {
        loadAndInjectSvg(document.getElementById('backToArtistsIcon'), 'arrow-left');
    }
    if (document.getElementById('backToAlbumsIcon')) {
        loadAndInjectSvg(document.getElementById('backToAlbumsIcon'), 'arrow-left');
    }
    if (elements.prevIcon) {
        loadAndInjectSvg(elements.prevIcon, 'skip-back');
    }
    if (elements.nextIcon) {
        loadAndInjectSvg(elements.nextIcon, 'skip-forward');
    }
    // Inicializa o ícone de volume e o slider
    updateVolumeIcon();
    // Garante que o slider de volume é configurado apenas se existir
    if (elements.volumeSlider) {
        elements.volumeSlider.value = localStorage.getItem('databeat-volume') * 100 || 100;
        elements.audioElement.volume = elements.volumeSlider.value / 100;
    }
});


// Inicializa o tema da aplicação (claro ou escuro)
function initializeTheme() {
    const savedTheme = localStorage.getItem('databeat-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Atualiza o ícone do botão de alternar tema
function updateThemeIcon(theme) {
    const icon = elements.themeToggle.querySelector('i');
    if (icon) {
        const iconName = theme === 'dark' ? 'sun' : 'moon';
        loadAndInjectSvg(icon, iconName);
    }
}

// Configura todos os ouvintes de eventos
function setupEventListeners() {
    // Navegação
    if (elements.backToArtists) {
        elements.backToArtists.addEventListener('click', showArtists);
    }
    if (elements.backToAlbums) { 
        elements.backToAlbums.addEventListener('click', () => showAlbums(currentArtist ? currentArtist.id : null));
    }
    if (elements.logo) {
        elements.logo.addEventListener('click', showArtists); // Adiciona navegação do logo para a home
    }
    
    // Controles do player de áudio
    if (elements.playAllBtn) { 
        elements.playAllBtn.addEventListener('click', togglePlayAllAlbum);
    }
    if (elements.shuffleBtn) { 
        elements.shuffleBtn.addEventListener('click', toggleShuffle);
    }
    if (elements.playPauseBtn) {
        elements.playPauseBtn.addEventListener('click', togglePlayPause);
    }
    if (elements.prevBtn) {
        elements.prevBtn.addEventListener('click', playPrevious);
    }
    if (elements.nextBtn) {
        elements.nextBtn.addEventListener('click', playNext);
    }
    
    // Barra de progresso para seek
    if (elements.progressBar) {
        elements.progressBar.addEventListener('click', seekTo);
    }

    // Controlo de Volume
    if (elements.volumeSlider) {
        elements.volumeSlider.addEventListener('input', (e) => {
            const volume = e.target.value / 100;
            elements.audioElement.volume = volume;
            localStorage.setItem('databeat-volume', volume);
            updateVolumeIcon(volume);
        });
    }
    
    // Eventos do elemento de áudio
    if (elements.audioElement) {
        elements.audioElement.addEventListener('loadedmetadata', updateDuration);
        elements.audioElement.addEventListener('timeupdate', updateProgress);
        elements.audioElement.addEventListener('ended', playNext);
        elements.audioElement.addEventListener('play', () => {
            isPlaying = true;
            updatePlayPauseButton();
            updateTrackListUI(); // Atualiza o status da faixa na lista
            updateAlbumPlayButton(); // Atualiza o botão play/pause do álbum
        });
        elements.audioElement.addEventListener('pause', () => {
            isPlaying = false;
            updatePlayPauseButton();
            updateTrackListUI(); // Atualiza o status da faixa na lista
            updateAlbumPlayButton(); // Atualiza o botão play/pause do álbum
        });
    }
    
    // Alternar tema
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }
}

// Alterna entre o tema claro e escuro
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('databeat-theme', newTheme);
    updateThemeIcon(newTheme);
}

// Funções de visualização
function showView(viewName) {
    // Esconde todas as visualizações
    elements.artistsView.classList.add('hidden');
    elements.albumsView.classList.add('hidden');
    elements.tracksView.classList.add('hidden');
    
    // Mostra a visualização alvo
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
    updateBreadcrumb(); // Atualiza o breadcrumb a cada mudança de view
}

// Atualiza a navegação breadcrumb
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

// Mostra a lista de artistas
function showArtists() {
    currentArtist = null;
    currentAlbum = null;
    
    showView('artists');
    
    const artistsHTML = musicData.artists.map(artist => `
        <div class="card" onclick="showAlbums('${artist.id}')">
            <img class="card-image" src="${artist.image}" alt="${artist.name}" onerror="this.src = getPlaceholderUrl(220, 220, 'Artista');" />
            <h3 class="card-title">${artist.name}</h3>
            <p class="card-subtitle">${artist.albums.length} álbum${artist.albums.length !== 1 ? 's' : ''}</p>
        </div>
    `).join('');
    
    elements.artistsGrid.innerHTML = artistsHTML;
}

// Mostra a lista de álbuns de um artista específico
function showAlbums(artistId) {
    const artist = musicData.artists.find(a => a.id === artistId);
    if (!artist) return;
    
    currentArtist = artist;
    currentAlbum = null;
    
    showView('albums');
    
    elements.albumsTitle.textContent = `Álbuns de ${artist.name}`;
    
    const albumsHTML = artist.albums.map(album => `
        <div class="card" onclick="showTracks('${artistId}', '${album.id}')">
            <img class="card-image" src="${album.cover}" alt="${album.name}" onerror="this.src = getPlaceholderUrl(220, 220, 'Álbum');" />
            <h3 class="card-title">${album.name}</h3>
            <p class="card-subtitle">${album.year} • ${album.tracks.length} faixa${album.tracks.length !== 1 ? 's' : ''}</p>
        </div>
    `).join('');
    
    elements.albumsGrid.innerHTML = albumsHTML;
}

// Mostra as faixas de um álbum específico
function showTracks(artistId, albumId) {
    const artist = musicData.artists.find(a => a.id === artistId);
    if (!artist) return;
    
    const album = artist.albums.find(a => a.id === albumId);
    if (!album) return;
    
    currentArtist = artist;
    currentAlbum = album;
    
    showView('tracks');
    
    // Atualiza o cabeçalho do álbum
    elements.albumCoverLarge.src = album.cover;
    elements.albumCoverLarge.onerror = function() {
        this.src = getPlaceholderUrl(280, 280, 'Capa do Álbum');
    };
    elements.albumTitle.textContent = album.name;
    elements.albumArtist.textContent = artist.name;
    
    // Preenche a currentPlaylist e shuffledPlaylist
    originalPlaylist = album.tracks.map((track, index) => ({ // Armazena a playlist original
        ...track,
        artist: artist.name,
        album: album.name,
        cover: album.cover,
        index // Índice na playlist original
    }));
    currentPlaylist = [...originalPlaylist]; // Começa com a playlist original
    shuffledPlaylist = [...originalPlaylist].sort(() => Math.random() - 0.5);

    // Cria a lista de faixas
    const tracksHTML = currentPlaylist.map((track, index) => `
        <div class="track-item" onclick="playTrack(${index})" data-track-index="${index}">
            <span class="track-number">${track.id}</span>
            <div class="track-info">
                <div class="track-title">${track.title}</div>
                <div class="track-duration">${track.duration}</div>
            </div>
            <button class="track-play-btn" onclick="event.stopPropagation(); playTrack(${index})">
                <i class="track-play-icon" data-icon-type="${(index === currentTrackIndex && isPlaying && currentTrack && currentTrack.album === currentAlbum.name) ? 'pause' : 'play'}"></i>
            </button>
        </div>
    `).join('');
    
    elements.tracksContainer.innerHTML = tracksHTML;
    
    // Carrega os ícones nos botões da lista de faixas
    document.querySelectorAll('.track-play-btn .track-play-icon').forEach(iconElement => {
        const iconType = iconElement.getAttribute('data-icon-type');
        loadAndInjectSvg(iconElement, iconType);
    });

    updateTrackListUI(); // Atualiza o estado da lista de faixas
    updateAlbumPlayButton(); // Garante que o botão de play/pause do álbum esteja atualizado
    updateShuffleButton(); // Garante que o botão de aleatório esteja atualizado
}

// Função para alternar o modo aleatório
function toggleShuffle() {
    isShuffling = !isShuffling;
    updateShuffleButton(); // Atualiza o estilo do botão de aleatório
    
    // Se a música está a tocar e o modo aleatório foi ativado/desativado,
    // reinicia a faixa atual na nova ordem/desordem da playlist.
    if (isPlaying && currentTrack) {
        // Encontra o índice da faixa atual na playlist a ser usada (embaralhada ou original)
        const playlistToUse = isShuffling ? shuffledPlaylist : originalPlaylist;
        const newIndex = playlistToUse.findIndex(t => t.id === currentTrack.id && t.album === currentTrack.album);
        if (newIndex !== -1) {
            currentTrackIndex = newIndex;
        } else {
            // Se a faixa não for encontrada (o que não deveria acontecer),
            // podemos optar por parar a reprodução ou começar do início da nova playlist.
            currentTrackIndex = 0; // fallback
        }
        // Recarrega a faixa para aplicar a nova ordem da playlist
        playTrack(currentTrackIndex);
    }
}

// Atualiza o estilo do botão de aleatório (ativa/desativa)
function updateShuffleButton() {
    if (elements.shuffleBtn) { 
        if (isShuffling) {
            elements.shuffleBtn.classList.add('active');
        } else {
            elements.shuffleBtn.classList.remove('active');
        }
        // Carrega o ícone para o botão de shuffle
        if (elements.shuffleBtn.querySelector('i')) { // Ensure the icon element exists
            loadAndInjectSvg(elements.shuffleBtn.querySelector('i'), 'shuffle'); 
        }
    }
}

// Atualiza o ícone de volume com base no nível
function updateVolumeIcon(volume = elements.audioElement.volume) {
    const iconElement = elements.volumeIcon;
    if (!iconElement) return;

    let iconName = 'volume-2'; // Default para volume médio

    if (volume === 0) {
        iconName = 'volume-x'; // Mute
    } else if (volume < 0.5) {
        iconName = 'volume-1'; // Baixo
    }
    // Para volume > 0.5, permanece 'volume-2' (alto)
    
    loadAndInjectSvg(iconElement, iconName);
}

// Funções do player de áudio
function playTrack(trackIndex) {
    const playlistToUse = isShuffling ? shuffledPlaylist : currentPlaylist;
    if (!playlistToUse.length) return;
    
    currentTrackIndex = trackIndex;
    const track = playlistToUse[trackIndex];
    
    // Atualiza a fonte de áudio
    elements.audioElement.src = track.url;
    
    // Atualiza a UI do player
    elements.playerCover.src = track.cover;
    elements.playerCover.onerror = function() {
        this.src = getPlaceholderUrl(60, 60, 'Faixa');
    };
    elements.playerTitle.textContent = track.title;
    elements.playerArtist.textContent = track.artist;
    
    // Mostra o player de áudio
    elements.audioPlayer.classList.remove('hidden');
    
    // Atualiza a UI da lista de faixas para indicar a música tocando
    updateTrackListUI();
    
    // Toca a faixa
    elements.audioElement.play().catch(e => {
        console.log('Erro ao reproduzir:', e);
        // Pode adicionar uma mensagem ao utilizador aqui, se desejar
    });
    
    currentTrack = track;
    updateAlbumPlayButton(); // Atualiza o botão play/pause do álbum
}

// Lógica para o botão principal de play/pause do álbum
function togglePlayAllAlbum() {
    const playlistToUse = isShuffling ? shuffledPlaylist : currentPlaylist;
    if (!playlistToUse.length) return;

    // Verifica se a música atual pertence ao álbum atual
    const currentTrackBelongsToAlbum = currentTrack && currentAlbum && 
                                               currentTrack.album === currentAlbum.name && 
                                               currentTrack.artist === currentArtist.name;

    if (currentTrackBelongsToAlbum && elements.audioElement.paused === false) {
        // Se a música do álbum está a tocar, pausa
        elements.audioElement.pause();
    } else if (currentTrackBelongsToAlbum && elements.audioElement.paused === true) {
        // Se a música do álbum está pausada, continua a tocar
        elements.audioElement.play().catch(e => console.log('Erro ao reproduzir:', e));
    } else {
        // Se nenhuma música do álbum está a tocar, ou é de outro álbum, começa a primeira faixa
        playTrack(0);
    }
}

// Toca a faixa anterior na playlist (considerando o modo aleatório)
function playPrevious() {
    const playlistToUse = isShuffling ? shuffledPlaylist : currentPlaylist;
    if (playlistToUse.length === 0) return;
    
    const prevIndex = currentTrackIndex > 0 ? currentTrackIndex - 1 : playlistToUse.length - 1;
    playTrack(prevIndex);
}

// Toca a próxima faixa na playlist (considerando o modo aleatório)
function playNext() {
    const playlistToUse = isShuffling ? shuffledPlaylist : currentPlaylist;
    if (playlistToUse.length === 0) return;
    
    const nextIndex = currentTrackIndex < playlistToUse.length - 1 ? currentTrackIndex + 1 : 0;
    playTrack(nextIndex);
}

// Alterna entre play e pause (para o player inferior)
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

// Atualiza o ícone do botão play/pause do player inferior
function updatePlayPauseButton() {
    const icon = elements.playPauseBtn.querySelector('i');
    if (icon) {
        loadAndInjectSvg(icon, isPlaying ? 'pause' : 'play');
    }
}

// Atualiza o ícone do botão principal de play/pause do álbum
function updateAlbumPlayButton() {
    const icon = elements.playAllBtn.querySelector('i');
    // Verifica se a música atual pertence ao álbum que está a ser visualizado
    const currentTrackBelongsToAlbum = currentTrack && currentAlbum && 
                                               currentTrack.album === currentAlbum.name && 
                                               currentTrack.artist === currentArtist.name;

    if (icon) {
        if (currentTrackBelongsToAlbum && isPlaying) {
            loadAndInjectSvg(icon, 'pause');
        } else {
            loadAndInjectSvg(icon, 'play');
        }
    }
}

// Atualiza a UI da lista de faixas (destaque e ícone de play/pause)
function updateTrackListUI() {
    const trackItems = document.querySelectorAll('.track-item');
    trackItems.forEach((item, index) => {
        const playBtnIcon = item.querySelector('.track-play-btn i');
        const activePlaylist = isShuffling ? shuffledPlaylist : currentPlaylist;

        const isCurrentTrackInDisplayList = activePlaylist[currentTrackIndex] && 
                                            (activePlaylist[currentTrackIndex].id === currentPlaylist[index].id &&
                                            activePlaylist[currentTrackIndex].album === currentPlaylist[index].album &&
                                            activePlaylist[currentTrackIndex].artist === currentPlaylist[index].artist);


        if (isCurrentTrackInDisplayList) {
            item.classList.add('playing');
            if (playBtnIcon) {
                loadAndInjectSvg(playBtnIcon, isPlaying ? 'pause' : 'play');
            }
        } else {
            item.classList.remove('playing');
            if (playBtnIcon) {
                loadAndInjectSvg(playBtnIcon, 'play');
            }
        }
    });
}

// Atualiza a duração total da faixa no player
function updateDuration() {
    const duration = elements.audioElement.duration;
    if (!isNaN(duration)) {
        elements.totalTime.textContent = formatTime(duration);
    }
}

// Atualiza o progresso da barra e o tempo atual da faixa
function updateProgress() {
    const currentTime = elements.audioElement.currentTime;
    const duration = elements.audioElement.duration;
    
    if (!isNaN(currentTime) && !isNaN(duration)) {
        const progress = (currentTime / duration) * 100;
        elements.progressFill.style.width = `${progress}%`;
        elements.currentTime.textContent = formatTime(currentTime);
    }
}

// Permite "buscar" (pular para um ponto) na faixa clicando na barra de progresso
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

// Formata o tempo de segundos para MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Funções globais para serem acessíveis pelos atributos onclick no HTML
window.showAlbums = showAlbums;
window.showTracks = showTracks;
window.playTrack = playTrack;
window.showArtists = showArtists;