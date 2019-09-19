var buttons = document.querySelectorAll('#container  button');
var decAdd = false;


var operators = ['/','-','*','+'];

for(var i= 0;i<buttons.length;i++)
	{
	buttons[i].onclick = function(e)  {
		var input = document.querySelector('.display');
		var inputValue = input.innerHTML;
		var btnValue = this.innerHTML;
		console.log(btnValue);

		
		// AC works
		if(btnValue == 'AC') {
			input.innerHTML = '';
			decAdd = false;
		}

		 // equal button working function

		else if(btnValue == '=') {
			var eq = inputValue;
			var lastChar = eq[eq.length-1];

				// checking if last char is operator or decimal
				if(operators.indexOf(lastChar) > -1 || lastChar == '.') {
					eq = eq.replace(/.$/,'');
				}
				if(eq) {
					input.innerHTML = eval(eq);
					decAdd = false;
				}
			}

			// show button clicked on display div

		 else if (operators.indexOf(btnValue) > -1) {
		
				var lastChar = inputValue[inputValue.length-1];
				if(inputValue != '' && operators.indexOf(lastChar) == -1) {
					input.innerHTML += btnValue;
				}
				else if (inputValue == '' && btnValue == '-')
					input.innerHTML += btnValue;
				if (operators.indexOf(lastChar) > -1 && inputValue.length > 1) {
					input.innerHTML = inputValue.replace(/.$/,btnValue);
				}
				decAdd = false;
			}

			else if (btnValue == '.') {
				if (!decAdd) {
					input.innerHTML += btnValue;
					decAdd = true;
				}
			}

			else {
				input.innerHTML += btnValue;
			}

			e.preventDefault();
			}



}	