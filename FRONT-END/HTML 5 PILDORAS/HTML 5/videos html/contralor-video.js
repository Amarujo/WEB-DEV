// JavaScript Document

var mivideo, play, barra, progreso, maximo;

maximo = 600;

function comenzar(){
	mivideo = document.getElementById("mivideo");
	play = document.getElementById("play");
	barra = document.getElementById("barra");
	progreso= document.getElementById("progreso");
	
	play.addEventListener("click", reproducir, false);
	
	barra.addEventListener("click", adelantando, false);
	
	
}

function reproducir(){
	
	if(mivideo.paused==false && mivideo.ended==false){
		mivideo.pause();
		play.innerHTML="play";
		barra_progreso();
	}else{
		mivideo.play();	
		play.innerHTML="pause";//cambia valor de la etiqueta html

		bucle = setInterval(barra_progreso, 10);
	}
	
}

function barra_progreso(){
	
	if(mivideo.ended==false){
		var total = parseInt(mivideo.currentTime*maximo/mivideo.duration);
		progreso.style.width = total+"px";	
	}
	
}

function adelantando(posicion){//posicion es un objeto-evento generado
	

	
	//if(mivideo.paused==false && mivideo.ended==false){
	var ratonX = posicion.pageX - barra.offsetLeft;
	var nuevoTiempo = ratonX * mivideo.duration / maximo;
	mivideo.currentTime = nuevoTiempo;
	progreso.style.width = ratonX + "px";
	//}
}

//window.onload = comenzar;
window.addEventListener("load", comenzar, false);
