console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successfully!');
}

document.getElementById('contact').addEventListener('submit', handleSubmit);

let img = document.querySelector('img');

img.addEventListener('mouseover', 
	() => {
		alert('Thank you for touching me!');
	}
);	