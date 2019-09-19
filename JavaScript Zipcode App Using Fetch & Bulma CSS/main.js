// Listen for submit
document.querySelector('#zipForm').addEventListener('submit', getLocationInfo);

//listen for delete
document.querySelector('body').addEventListener('click', deleteLocation);

function getLocationInfo(e){
	// console.log(123);
	//get zip value form input

	const zip = document.querySelector('.zip').value;
	// console.log(zip);

	// Make request

	fetch(`http://api.zippopotam.us/us/${zip}`)
	.then(response => {
		// console.log(res.status);
		if(response.status != 200) {
			showIcon('remove');
			document.querySelector('#output').innerHTML = 
			`
			<article class="message is-danger">
			<div class="message-body">Invalid Zipcode, please input again.
			</div></article>
			`;
			throw Error(response.statusText);
		}
		else {
			showIcon('check');
			return response.json();
		}
	})
	.then(data =>{
		// console.log(data);
		let output = '';

		data.places.forEach(place => {
			output += `
				<article class="message is-primary">
					<div class="message-header">
					<p>Location Info</p>
					<button class="delete"></button>
					</div>
					<div class="message-body">
						<ul>
							<li><strong>City: </strong>${place['place name']}</li>
							<li><strong>State: </strong>${place['state']}</li>
							<li><strong>Longitude: </strong>${place['longitude']}</li>
							<li><strong>Lalitude: </strong>${place['lalitude']}</li>
						</ul>
					</div>

				</article>
			`;
		});

		//Insert into output div
		document.querySelector('#output').innerHTML = output;


	})
	.catch(err => console.log(err));

	e.preventDefault();
}

function showIcon(icon) {
	//Clear icon
	document.querySelector('.icon-remove').style.display = 'none';
	document.querySelector('.icon-check').style.display = 'none';
	//Show correct icon
	document.querySelector(`.icon-${icon}`).style.display = 'inline-flex';

}

function deleteLocation(e) {
	// console.log(123);
	if(e.target.className == 'delete'){
		// console.log(123);
		document.querySelector('.message').remove();
		document.querySelector('.zip').value = '';
		document.querySelector('.icon-check').remove();
	}
}
