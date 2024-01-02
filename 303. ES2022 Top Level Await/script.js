// const arr = [100, 200, 400, 50000, 10];
// arr[2]; //400
// arr.at(2); //400

// arr[arr.length - 2]; //50000
// arr.at(-2); //50000

// fetch('https://jsonplaceholder.typicode.com/users')
// 	.then((response) => response.json())
// 	.then(console.log);

// async function fetchStarship() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();
	console.log(data);
// }