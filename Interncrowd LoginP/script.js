function validate() {
	var username = document.getElementsByName("username")[0].value;
	var password = document.getElementsByName("password")[0].value;

	if (username == "") {
		document.getElementsByClassName("error-message")[0].innerHTML = "Please enter your username";
	} else if (password == "") {
		document.getElementsByClassName("error-message")[0].innerHTML = "Please enter your password";
	} else {
		alert("Login successful!");
	}
}
