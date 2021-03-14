"use strict";
var  tcount = 0;
var price = 0;
var total_price = 0;

function func1() {
	var movielist = document.getElementById("movie");
	var selectedText = movielist.options[movielist.selectedIndex].text;
	document.getElementById('selectedmovie').innerHTML 
					= selectedText; 
	if(selectedText=="Titanic ($13.00)"){
		document.getElementById('tprice').innerHTML 
					= "$13.00"; 
		price = 13.00;
	}
	else if(selectedText=="Pirates of Carribean ($15.00)"){
		document.getElementById('tprice').innerHTML 
					= "$15.00"; 
		price = 15.00;
	}
	else if(selectedText=="East Pray Love ($10.00)"){
		document.getElementById('tprice').innerHTML 
					= "$10.00"; 
		price = 10.00;
	}
	else{
		//do nothing
	}
	document.getElementById('selectedseats').innerHTML 
					= tcount;
	total_price = price * tcount;
	document.getElementById('totalprice').innerHTML 
					= '$'+total_price+'.00';
	localStorage["tp"] = total_price;
};

function myFunction(elem,clr){
	elem.style.backgroundColor = clr;
	tcount = tcount+1;
	document.getElementById('selectedseats').innerHTML 
					= tcount;
	total_price = price * tcount;
	document.getElementById('totalprice').innerHTML 
					= '$'+total_price+'.00';
	localStorage["tp"] = total_price;
};

function myFunc2(){
	document.getElementById('tprice').innerHTML = "$0.00";
	document.getElementById('selectedseats').innerHTML = 0;
	document.getElementById('totalprice').innerHTML = '$0.00';
	
};

