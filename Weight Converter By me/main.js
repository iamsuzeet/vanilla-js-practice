
document.getElementById('output').style.visibility = 'hidden';



let weightAmount = 0;
function weightSelected(weight)
{
//Set convertion outputs

          weightType = weight.value;

           switch (weightType) {

               case '1':
                   document.querySelector('#weightValue').setAttribute('placeholder', 'Enter killograms...')
                   convertKillograms(weightAmount);
                   
                   document.querySelector('.card.kilogram').style.display = 'none';
                   document.querySelector('.card.gram').style.display = 'block';
                   document.querySelector('.card.pound').style.display = 'block';
                   document.querySelector('.card.ounce').style.display = 'block';
                   break;
               case '2':
                   document.querySelector('#weightValue').setAttribute('placeholder', 'Enter grams...')
                   convertGrams(weightAmount);
                   document.querySelector('.card.kilogram').style.display = 'block';
                   document.querySelector('.card.gram').style.display = 'none';
                   document.querySelector('.card.pound').style.display = 'block';
                   document.querySelector('.card.ounce').style.display = 'block';
                   break;
               case '3':
                   document.querySelector('#weightValue').setAttribute('placeholder', 'Enter pounds...')
                   convertPounds(weightAmount);
                   document.querySelector('.card.kilogram').style.display = 'block';
                   document.querySelector('.card.gram').style.display = 'block';
                   document.querySelector('.card.pound').style.display = 'none';
                   document.querySelector('.card.ounce').style.display = 'block';
                   break;
               case '4':
                   document.querySelector('#weightValue').setAttribute('placeholder', 'Enter ounces...')
                   convertOunces(weightAmount);
                   document.querySelector('.card.kilogram').style.display = 'block';
                   document.querySelector('.card.gram').style.display = 'block';
                   document.querySelector('.card.pound').style.display = 'block';
                   document.querySelector('.card.ounce').style.display = 'none';
                   break;

           }
       }


       //Conver weight
       document.getElementById('weightValue').addEventListener('input', function(e) {
           document.getElementById('output').style.visibility = 'visible';
           weightAmount = e.target.value;

           if (weightType == '1') {
               convertKillograms(weightAmount);
           } else if (weightType == '2') {
               convertGrams(weightAmount);
           } else if (weightType == '3') {
               convertPounds(weightAmount);
           } else if (weightType == '4') {
               convertOunces(weightAmount);
           }

           if (e.target.value === "")
               document.getElementById('output').style.visibility = 'hidden';

       });

       function convertKillograms(weight) {
           document.getElementById('toGm').innerHTML = (weight * 1000).toFixed(2);
           document.getElementById('toLb').innerHTML = (weight * 2.2046).toFixed(2);
           document.getElementById('toOz').innerHTML = (weight * 35.274).toFixed(2);
       }

       function convertGrams(weight) {
           document.getElementById('toKg').innerHTML = (weight / 1000).toFixed(2);
           document.getElementById('toLb').innerHTML = (weight * 453.59237).toFixed(2);
           document.getElementById('toOz').innerHTML = (weight * 0.035274).toFixed(2);
       }

       function convertPounds(weight) {
           document.getElementById('toGm').innerHTML = (weight / 0.0022046).toFixed(2);
           document.getElementById('toKg').innerHTML = (weight / 2.2046).toFixed(2);
           document.getElementById('toOz').innerHTML = (weight / weight * 16).toFixed(2);
       }

       function convertOunces(weight) {
           document.getElementById('toGm').innerHTML = (weight / 0.035274).toFixed(2);
           document.getElementById('toKg').innerHTML = (weight / 35.274).toFixed(2);
           document.getElementById('toLb').innerHTML = (weight * 0.062500).toFixed(2);
       }