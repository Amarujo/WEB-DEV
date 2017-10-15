// JavaScript Document

window.onload=ejecuta;
var imagen 
alert("hola")
function ejecuta(){
	alert("hola")
	imagen =	document.querySelector("img");
	imagen.addEventListener("mouseover", agrandar, false);
	imagen.addEventListener("mouseout", meguar, false);
}

function agrandar(){
		imagen.height = 95;
		imagen.width = 185;
	}
	
function meguar(){
	imagen.height = 90;
		imagen.width = 180;
	}