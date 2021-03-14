"use strict";
var value = 0;
function payments(){
	value = localStorage["tp"];
	document.getElementById('amount').innerHTML = '$'+value+'.00';
};