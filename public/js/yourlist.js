console.log("Welcome To Spotify");

let songIndex = 0;
let audioElement = new Audio("Arctic Monkeys - Do I Wanna Know (Official Video).mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let caption = Array.from(document.getElementsByClassName('caption'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let backward = Array.from(document.getElementsByClassName('backward'));
let songs = [
    {
        songName: "Arctic Monkeys - Alan walker",
        filepath:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3",
        coverPath:"https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250"
    },
    {
        songName: "One Republic - Counting Stars",
        filepath:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3",
        coverPath:"https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg?cs=srgb&dl=pexels-dmitry-demidov-3784566.jpg&fm=jpg&_gl=1*1cjmdv0*_ga*MTEzMTI4MjAyOC4xNjY4NjU5OTU4*_ga_8JE65Q40S6*MTY2ODY5MDE2MC4zLjEuMTY2ODY5MDYyNS4wLjAuMA.."
    },
    {
        songName: "Alan Walker - Faded",
        filepath:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
        coverPath:"https://images.pexels.com/photos/417458/pexels-photo-417458.jpeg?cs=srgb&dl=pexels-pixabay-417458.jpg&fm=jpg&_gl=1*k50adn*_ga*MTEzMTI4MjAyOC4xNjY4NjU5OTU4*_ga_8JE65Q40S6*MTY2ODY5MDE2MC4zLjEuMTY2ODY5MTU0OS4wLjAuMA.."
    },
    {
        songName: "Coldplay - Paradise",
        filepath:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3",
        coverPath:"https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?cs=srgb&dl=pexels-annam-w-1047442.jpg&fm=jpg&_gl=1*1mibif9*_ga*MTEzMTI4MjAyOC4xNjY4NjU5OTU4*_ga_8JE65Q40S6*MTY2ODY5MDE2MC4zLjEuMTY2ODY5MDY1OS4wLjAuMA.."
    },
    {
        songName: "Adam Lambert - Ghost Town",
        filepath:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
        coverPath:"https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?cs=srgb&dl=pexels-sebastiaan-stam-1482476.jpg&fm=jpg&_gl=1*1fgy3uv*_ga*MTEzMTI4MjAyOC4xNjY4NjU5OTU4*_ga_8JE65Q40S6*MTY2ODY5MDE2MC4zLjEuMTY2ODY5MTU5MS4wLjAuMA.."
    },
    {
        songName: "Ed Sheeran - Shape of You",
        filepath:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3",
        coverPath:"https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?cs=srgb&dl=pexels-thibault-trillet-167491.jpg&fm=jpg&_gl=1*7f2m9k*_ga*MTEzMTI4MjAyOC4xNjY4NjU5OTU4*_ga_8JE65Q40S6*MTY2ODY5MDE2MC4zLjEuMTY2ODY5MTYyMi4wLjAuMA.."
    },
    {
        songName: "Bastille - Pompeii",
        filepath:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
        coverPath:"https://images.pexels.com/photos/761543/pexels-photo-761543.jpeg?cs=srgb&dl=pexels-jack-gittoes-761543.jpg&fm=jpg&_gl=1*n4exzn*_ga*MTEzMTI4MjAyOC4xNjY4NjU5OTU4*_ga_8JE65Q40S6*MTY2ODY5MDE2MC4zLjEuMTY2ODY5MTY2NC4wLjAuMA.."
    },
    {
        songName: "Wiz Khalifa - See You Again",
        filepath:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3",
        coverPath:"https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?cs=srgb&dl=pexels-chad-kirchoff-952437.jpg&fm=jpg&_gl=1*1484zqw*_ga*MTEzMTI4MjAyOC4xNjY4NjU5OTU4*_ga_8JE65Q40S6*MTY2ODY5MDE2MC4zLjEuMTY2ODY5MTY4Mi4wLjAuMA.."
    },
    {
        songName: "Avicci - Wake Me Up",
        filepath:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3",
        coverPath:"https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-1629236.jpg&fm=jpg&_gl=1*1yjpb9f*_ga*MTEzMTI4MjAyOC4xNjY4NjU5OTU4*_ga_8JE65Q40S6*MTY2ODY5MDE2MC4zLjEuMTY2ODY5MTc5My4wLjAuMA.."
    },
    {
        songName: "Chainsmokers - Closer",
        filepath:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
        coverPath:"https://images.pexels.com/photos/2361729/pexels-photo-2361729.jpeg?cs=srgb&dl=pexels-tom-fisk-2361729.jpg&fm=jpg&_gl=1*1gohyzz*_ga*MTEzMTI4MjAyOC4xNjY4NjU5OTU4*_ga_8JE65Q40S6*MTY2ODY5MDE2MC4zLjEuMTY2ODY5MTczNC4wLjAuMA.."
    },
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        if(songIndex!=0){
            audioElement.play();
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            songItemPlay[songIndex].classList.remove("fa-circle-play");
            songItemPlay[songIndex].classList.add("fa-circle-pause");
            gif.style.opacity = 1;}
        else{
            audioElement.play();
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            songItemPlay[0].classList.remove("fa-circle-play");
            songItemPlay[0].classList.add("fa-circle-pause");
            gif.style.opacity = 1;
        }

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
        makeAllPlays();
    }
})
//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //Updating seek-bar
    var progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    if(progress!=100){
        myProgressBar.value = progress;
    }
    else{
        progress=0;
        myProgressBar.value = progress;
        audioElement.currentTime = 0;
        audioElement.play();
    }

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value *audioElement.duration)/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)-1;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        audioElement.src = songs[songIndex].filepath;
        caption[0].innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex==0){
        songIndex=9;
    }
    else{
        songIndex-=1;
    }
    makeAllPlays();
    songItemPlay[songIndex].classList.remove("fa-circle-play");
    songItemPlay[songIndex].classList.add("fa-circle-pause");
    audioElement.src = songs[songIndex].filepath;
    caption[0].innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex==9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    makeAllPlays();
    songItemPlay[songIndex].classList.remove("fa-circle-play");
    songItemPlay[songIndex].classList.add("fa-circle-pause");
    audioElement.src = songs[songIndex].filepath;
    caption[0].innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
