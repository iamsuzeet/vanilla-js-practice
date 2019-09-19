// function doclick() {
// 	alert('You clicked');
// }


// function changeText(id){
// 	id.innerHTML ='You clicked';
// }

function changeText() {
	var heading = document.getElementById('heading');
	heading.innerHTML = 'You clicked';
}


function showDate() {
	var date =document.getElementById('date');
	date.innerHTML = Date();
}

function showTime() {
	var time = document.getElementById('time');
	time.innerHTML = Date();
}

function clearDate() {
	var time =document.getElementById('time');
	time.innerHTML = '';
}


// FORMS

function changeBackground(x) {
	console.log(x.value);

	var heading = document.getElementById('heading');
	heading.style.color = x.value;
}



function validateForm() {
	// var firstName = document.forms["myForm"]["firstName"].value;
	 var firstName = document.getElementById('firstName').value;

	if(firstName == null || firstName == "" ) {
		alert("First name is required");
		return false;
	}

	if(firstName.length < 3 ) {
		alert("First name must be at least 3 characters");
		return false;
	}

	// e.preventDefault();

}