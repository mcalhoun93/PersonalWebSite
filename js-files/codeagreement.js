$(document).ready( function codeagreementpopup() {

	var userName = prompt("Type your name to state that you will not reuse the code of this site without the authors permission");

	if (userName !== null) {
	
	alert("Thank you for your consideration, " + userName);
	
	}

else { 
	window.location.assign("http://www.w3schools.com/js/default.asp");
}
});