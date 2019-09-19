
//store all id value in some variables

var weightType = document.getElementById('weightType');
var weightValue = document.getElementById('weightValue');
var lbValue = document.getElementById('lbValue');
var kgValue = document.getElementById('kgValue');
var ozValue = document.getElementById('ozValue');
var gmValue = document.getElementById('gmValue');
var lbOutput = document.getElementById('lbOutput');
var kgOutput = document.getElementById('kgOutput');
var ozOutput = document.getElementById('ozOutput');
var gmOutput = document.getElementById('gmOutput');
var output = document.getElementById('output');




//track the select option value 
 
 let wt = 0;

 //Hide input and output value at startup
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('weightValue').style.visibility = 'hidden';

 //listen for change in Select Box 

 weightType.addEventListener('change', function(e){
 	//show input box and cards

 	document.getElementById('weightValue').style.visibility = 'visible';
 	document.getElementById('output').style.visibility = 'visible';

 	// get current selected option

 	let val = e.target.value;

 	//hide selected card and display rest

 	if(val === '1') {
 		wt = 1;
 	 hideCard('kgValue');
 	
 	}

 	if(val === '2') {
 		wt = 2;
 		hideCard('lbValue');
 	}

 	if(val === '3') {
 		wt = 3;
 		hideCard('ozValue');
 	}

 	if(val ===' 4') {
 		wt = 4;
 		hideCard('gmValue');
 	}




 });


 //update converted value on output 

 weightValue.addEventListener('input', function(e) {
 	let val = e.target.value;
 	convert(wt, val);
 });


 // function for hide selected card and display rest of the card

 function hideCard(card) {
  // get  a list of all cards

  let cardArray = ['lbValue','kgValue','ozValue','gmValue'];

 	for(var i= 0;i < cardArray.length; i++) {
 		if(cardArray[i] == card) {
 			let match = cardArray[i];


 			document.getElementById(match).style.display = 'none';
 		}
 		else {
      let match = cardArray[i];
 			document.getElementById(match).style.display = 'block';
 			
 		}
 	}

 	updateValues() ;
 	
 }

 // FUNCTION: Used only with hideCard function
 // Updates cards converted values when selected weight type has changed
 function updateValues() {
   let val = weightValue.value;
   convert(wt, val);
 }

 // FUNCTION: Handles all conversion ratios
 function convert(wt, val) {
   switch(wt) {
     case 1: // Kilos to...
       lbOutput.innerHTML = (val*2.2046).toFixed(2);
       gmOutput.innerHTML = val*1000;
       ozOutput.innerHTML = (val*35.274).toFixed(2);

       break;
     case 2: // Pounds to...
       kgOutput.innerHTML = (val/2.2046).toFixed(2);
       gmOutput.innerHTML = (val/0.0022046).toFixed(2);
       ozOutput.innerHTML = val*16;
       break;
     case 3: // Grams to...
       kgOutput.innerHTML = val/1000;
       lbOutput.innerHTML = val/500;
       ozOutput.innerHTML = (val*0.035274).toFixed(4);
       break;
     case 4: // Ounces to...
       kgOutput.innerHTML = (val/35.274).toFixed(3);
       lbOutput.innerHTML = (val*0.062500).toFixed(3);
       gmOutput.innerHTML = (val/0.035274).toFixed(4);
       break;
   }
 }




/*
	document.getElementById('weightValue').addEventListener('input', function(e) {
			document.getElementById('output').style.visibility = 'visible';
			let lbs = e.target.value;
			
			document.getElementById('gramsOutput').innerHTML = (lbs/0.0022046).toFixed(2);	

			document.getElementById('kgOutput').innerHTML = (lbs/2.2046).toFixed(2);

			document.getElementById('ozOutput').innerHTML = (lbs*16).toFixed(2);

		});

*/