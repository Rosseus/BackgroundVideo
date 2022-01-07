let botonPlay = document.querySelector('.play');
let botonMute = document.querySelector('.muted');
let video = document.getElementById("video")

botonPlay.addEventListener("click",()=>{
	if (botonPlay.innerHTML === "Pause"){
		botonPlay.innerHTML = "Play";
		video.pause();
	} else{
		botonPlay.innerHTML = "Pause";
		video.play();
	}
})

botonMute.addEventListener("click",()=>{
	if(botonMute.innerHTML === "Mute:ON"){
		botonMute.innerHTML = "Mute:OFF";
		video.muted = false;
		video.volume = 0.3;
	}else {
		botonMute.innerHTML = "Mute:ON"
		video.muted = true;

	}
})