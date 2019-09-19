// Initial RAtings

const ratings = {
	sony: 4.7,
	samsung: 3.4,
	vizio: 2.3,
	panasonic: 3.6,
	philips: 4.1
}

// total stars

const starsTotal = 5;

//run getRAtings when DOM loads
document.addEventListener(`DOMContentLoaded`,getRatings);

// Form elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

//init product 
let product;

//product select change
productSelect.addEventListener('change', (e) => {
	product = e.target.value;
	// console.log(product);
	// enable rating control
	ratingControl.disabled = false;
	ratingControl.value = ratings[product];

});

//rating control change
ratingControl.addEventListener('blur', (e) => {
	const rating = e.target.value;

	//check for under 5rating
	if(rating > 5) {
		alert('Please rate 1 -5');
	}

	//Change rating
	ratings[product] = rating;

	getRatings();
});

//get ratings
function getRatings() {
	for(let rating in ratings) {
		// console.log(ratings[rating]);
		// get percentage

		const starPercentage = (ratings[rating] / starsTotal) * 100;
		// console.log(starPercentage);

		// round to nearest 10
		const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
		
		// console.log(starPercentageRounded);

		// Set Width of stars-inner to percantage

		document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
		
		//add number rating
		document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];      
}
}
