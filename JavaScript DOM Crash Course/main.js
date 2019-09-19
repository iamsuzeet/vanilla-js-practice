var form = document.getElementById('addForm');

var itemList = document.querySelector('#items');

var filter = document.getElementById('filter');

//form submit event

form.addEventListener('submit',addItem);

// delete event
itemList.addEventListener('click',removeItem);

// filter event

filter.addEventListener('keyup',filterItems);

//add items

function addItem(e) {
	e.preventDefault();

	// console.log(123);

	// get input value
	var newItem = document.getElementById('item').value;
	

	// create new li element
	var li = document.createElement('li');
	// Add class
	li.className = 'list-group-item';

	// console.log(li);
	// Add text node with input value
	li.appendChild(document.createTextNode(newItem));

	// create del button
	var deleteBtn = document.createElement('button');

	// Add button class to delete
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

	// append text node
	deleteBtn.appendChild(document.createTextNode('X'));

	// append button li
	li.appendChild(deleteBtn);

	// append li to list
	itemList.appendChild(li);

}

function removeItem(e) {
	if(e.target.classList.contains('delete')) {
		if(confirm('Are You Sure?')) {
			var li =  e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

//filter Items

function filterItems(e) {
	//convert rext to lowercase
	var text = e.target.value.toLowerCase();
	// console.log(text);
	//Get list
	var items = itemList.getElementsByTagName('li');

	// convert to an array

	Array.from(items).forEach(function(item) {
		var itemName = item.firstChild.textContent;
		// console.log(itemName);
		if(itemName.toLowerCase().indexOf(text) != -1 ) {
			item.style.display = 'block';
		}
		else {
			item.style.display = 'none';
		}
	});

}