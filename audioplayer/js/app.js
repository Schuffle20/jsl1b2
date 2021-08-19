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

// nextbtn.addEventListener('click',()=>{
//    songindex++;
//    // console.log(songindex);
//    update();
//    playsong();
//
// });
//
// prevbtn.addEventListener('click',()=>{
//     songindex--;
//     update();
//     playsong();
//
// });
//
// function update(){
//     songs.forEach((song)=>{
//         if(songindex > songs.length - 1){
//             songindex = 0
//         }else if(songindex < 0){
//             songindex = songs.length - 1;
//         }
//         loadsong(songs[songindex]);
//     })
// }

prevbtn.addEventListener('click',previoussong);
nextbtn.addEventListener('click',nextsong);

//Previous Song
function previoussong(){
    songindex--;
    // console.log('songindex');

    if(songindex < 0){
        songindex = songs.length-1;
    }

    loadsong(songs[songindex]);
    playsong();
}

function nextsong(){
    // console.log('hay');

    songindex++;

    if(songindex > songs.length-1){
        songindex = 0;
    }
    loadsong(songs[songindex]);
    playsong();
}

//Update Progress Bar

function updateprogress(e){
    // console.log(audio.currentTime);
    console.log(audio.duration);

    // // Method1
    // const progresspercent = (audio.currentTime/audio.duration) * 100;
    // // console.log(progresspercent);
    // progress.style.width = `${progresspercent}%`;

   // Event Call
   // console.log(this);
   // console.log(e.target);
   // console.log(e.srcElement);

   // Method2
   //  const currentTime = e.target.currentTime;
   //  const duration = e.target.duration;
   //  const progresspercent = (currentTime/duration) * 100;
   //
   //  progress.style.width = `${progresspercent}%`;

    // Method3
    // const {currentTime} = e.target;
    // const {Duration} = e.target;
    // const progresspercent = (currentTime/duration) * 100;
    //
    // progress.style.width = `${progresspercent}%`;

    // Method 4
    const {currentTime, duration} = e.target;
    const progresspercent = (currentTime/duration) * 100;

    progress.style.width = `${progresspercent}%`;



}

function setprogress(e){
    // console.log(e.target);

    const width = e.target.clientWidth;
    // console.log(width);

    const clickx = e.offsetX;
    // console.log(clickx);

    const duration = audio.duration;
    // console.log(duration);

    audio.currentTime = (clickx / width) * duration;
}

//Time Play and Stop Update
audio.addEventListener('timeupdate', updateprogress);

//Click On Progress bar
progresscontainer.addEventListener('click', setprogress);

//SOng End
audio.addEventListener('ended', nextsong);




