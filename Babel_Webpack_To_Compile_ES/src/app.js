import { person, sayHello, name} from './lib';

// console.log(person.name);

// console.log(sayHello('Brad'));


async function getPosts() {
	const response = await fetch('http://jsonplaceholder.typicode.com/posts');

	const data = await response.json();
	return data;
}

getPosts().then(posts => console.log(posts))