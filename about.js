console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function display() {
	alert("Congrats, you found the image!")
}

