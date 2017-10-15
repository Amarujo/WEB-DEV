// JavaScript Document

var miaudio, play, barra, progreso, maximo;

maximo = 600;

function comenzar(){
	miaudio = document.getElementById("miaudio");
	play = document.getElementById("play");
	barra = document.getElementById("barra");
	progreso= document.getElementById("progreso");
	
	play.addEventListener("click", reproducir, false);
	
	barra.addEventListener("click", adelantando, false);
	
	
}

function reproducir(){
	
	if(miaudio.paused==false && miaudio.ended==false){
		miaudio.pause();
		play.innerHTML="play";
		barra_progreso();
	}else{
		miaudio.play();	
		play.innerHTML="pause";//cambia valor de la etiqueta html

		bucle = setInterval(barra_progreso, 10);
	}
	
}

function barra_progreso(){
	
	if(miaudio.ended==false){
		var total = parseInt(miaudio.currentTime*maximo/miaudio.duration);
		progreso.style.width = total+"px";	
	}
	
}

function adelantando(posicion){//posicion es un objeto-evento generado
	

	
	//if(mivideo.paused==false && mivideo.ended==false){
	var ratonX = posicion.pageX - barra.offsetLeft;
	var nuevoTiempo = ratonX * miaudio.duration / maximo;
	miaudio.currentTime = nuevoTiempo;
	progreso.style.width = ratonX + "px";
	//}
}

//window.onload = comenzar;
window.addEventListener("load", comenzar, false);
