const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const lastname = lastname.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username  boş ola bilməz');
	} else {
		setSuccessFor(username);
	}
    if(usernameValue === '') {
		setErrorFor(lastname, 'Lastname boş ola bilməz');
	} else {
		setSuccessFor(lastname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email  boş ola bilməz');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Düzgün deyil!');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, ' password boş ola bilməz');
	} else {
		setSuccessFor(password);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}