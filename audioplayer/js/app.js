// UI
const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('title'),
      progresscontainer = document.getElementById('progress-container'),
      progress = document.getElementById('progress');

const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const prevbtn = document.getElementById('prev'),
    playbtn = document.getElementById('play'),
    nextbtn = document.getElementById('next');

let songindex = 0;

//Song Title
const songs = ['sample1', 'sample2', 'sample3'];
// console.log(songs[songindex]);

loadsong(songs[songindex]);

function loadsong(music){
//    console.log(music);

    title.innerText = music;

    audio.src = `music/${music}.mp3`;
    cover.src = `img/${music}.jpg`;
}

//EventListener for Play
playbtn.addEventListener('click', ()=>{
   // console.log('hay');
    const isplaying = musiccontainer.classList.contains('play');

    if(isplaying) {
        pausesong();
    }else{
        playsong();
    }
});

//Play Song

function playsong(){

    musiccontainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

//PauseSong
function pausesong(){

    musiccontainer.classList.remove('play');

    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

nextbtn.addEventListener('click',()=>{
   songindex++;
   console.log(songindex);
   update();
   playsong();

});

prevbtn.addEventListener('click',()=>{
    songindex--;
    update();
    playsong();

});

function update(){
    songs.forEach((song)=>{
        if(songindex > songs.length - 1){
            songindex = 0
        }else if(songindex < 0){
            songindex = songs.length - 1;
        }
        loadsong(songs[songindex]);
    })
}

