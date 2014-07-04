/*

alert ("welcome to my javascipt page! ");


if(navigator.cookieEnabled){
	alert("Your browser supports cookies !");
}
else{
	alert("Your browser doesn't support cookies !");
}




if(confirm("Are you sure want to do this ?")){
	alert ("you said YES !")
}
else{
	alert("you said NO !")
}



var ans = prompt("what do you say ?","");

if(ans){
	alert ("you said " + ans)
}
else{
	alert("you refused to answer")
}
*/


window.onload = initAll;

function initAll(){
	document.getElementById("redirect").onclick = clickHandler;
}

function clickHandler(){
	alert ("click must doesn't work !");
	return false;
}

