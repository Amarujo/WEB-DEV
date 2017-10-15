// JavaScript Document

function ejecuta(){
	//document.getElementsByTagName("p")[0].onclick=saludo; //UN ELEMENTO [0] DETERMINA PRIMER P DEL ARRAY
	//document.getElementById('importante').onclick=saludo; //AFECTA ELEMENTO CON ID = 'IMPORTANTE'
	
	//TODOS LOS ELEMENTE CON LA MISMA ETIQUETA
	/*for(i=0; i<3; i++){
		document.getElementsByTagName('p')[i].onclick=saludo;	
		}*/
	for(i=0; i<2; i++){
	document.getElementsByClassName("importante")[i].onclick=saludo;
	}
}

function saludo(){
alert("Que hay de nuevo..")
}

window.onload=ejecuta;