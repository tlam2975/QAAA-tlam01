const inputs = document.querySelectorAll(".input");


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function login() {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	localStorage.setItem("username", username);

	// if (login_status = True) {
	// 	alert("Login successful!");
	// 	window.location.href = "main.html"; // Redirect to dashboard
	// } else {
	// 	alert("Invalid username or password.");
	// }
	if (username == null && password == null) {
		alert("Please enter username and password.");
	}
	else {
		window.location.href = "/../main.html"; // Redirect to dashboards
	}
}

function draft() {
	console.log("Draft saved");
}
