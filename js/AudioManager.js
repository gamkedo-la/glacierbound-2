var audioSourceList = {};
var musicVolume = 1.0;
var sfxVolume = 1.0;
var musicAudioPlayer = new Audio();
var currentMusicTrack = '';
musicAudioPlayer.volume = musicVolume;
musicAudioPlayer.loop = true;



function initAudioList(){

    //music
    audioSourceList['menu-music'] = 'audio/menu-music.mp3';
    audioSourceList['cave-music'] = 'audio/cave-music.mp3';

    //SFX
    audioSourceList['footstep'] = 'audio/synthesised-sounds/footsteps/footstep.wav';

    //ambient
    audioSourceList['wind'] = 'ambient effects/ambient_wind.wav';
    audioSourceList['ExteriorAmbient'] = 'ambient effects/GlacierBound2-ExteriorAmbientSound.mp3';
    audioSourceList['InteriorAmbient'] = 'ambient effects/GlacierBound2-InteriorLabSound.mp3';
}

//stops the previous music and starts the provided music
function playMusic(audioTrackFileName){
    //don't change tracks if it is already playing
    if(currentMusicTrack === audioTrackFileName){
        return;
    }
    //store the current track name
    currentMusicTrack = audioTrackFileName;
    musicAudioPlayer.pause();
    musicAudioPlayer.src = audioTrackFileName;
    musicAudioPlayer.play();
}

function setMusicVolume(newVolume){
    musicAudioPlayer.volume = newVolume;
}

function setSFXVolume(newVolume){
    musicAudioPlayer.volume = newVolume;
}

function playSFXAudio(audioTrackFileName){
    var audio = new Audio(audioTrackFileName);
    audio.volume = sfxVolume;
    audio.play();
}