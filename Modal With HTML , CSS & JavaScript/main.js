// Get modal  element

var modal = document.getElementById('simpleModal');
//get open modal
var modalBtn = document.getElementById('modalBtn');

//get close btn

var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click

modalBtn.addEventListener('click',openModal);


// listen for close click
closeBtn.addEventListener('click',closeModal);

// listen for outside click

window.addEventListener('click', clickOutside);


// function to open modal
function openModal() {
	// console.log(123);
	modal.style.display = 'block';
}

;

//function to close modal
function closeModal() {
	// console.log(123);
	modal.style.display = 'none';
}
//function to close modal if outside click
function clickOutside(e) {
	// console.log(123);
	if(e.target == modal){
	modal.style.display = 'none';
	}
}