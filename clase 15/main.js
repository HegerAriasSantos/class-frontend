// console.log("hola people");

// const arr = [1, 2, 3];
// arr[1];

// arr [1] [2] [3]
// [] [] []
// [] [] []

// CRUD
const arr = [];
// arr [1] [2] []
// arr [2] [1] []
// [] [] []

// Create
arr.push(1); // -> al final (mejor performance)
arr.push(2); // -> al final

arr.unshift(0); // -> al principio (poco performance)
arr.unshift(-1); // -> al principio

// Read
// console.log(arr[0]); // -> 2

// Update
// arr[0] = 3;

// Delete
// arr.pop(); // -> al final
// arr.shift(); // -> al principio
// arr.splice(0, 1); // -> en cualquier posición

// helpers functions

// forEach
// arr.forEach((element, index) => {
// 	console.log(element, index);
// });

// map
// const newArr = arr.map(element => {
// 	return element * 2;
// });
// console.log(arr);
// console.log(newArr);

// filter
// const newArr = arr.filter(element => {
// 	return element >= 1;
// });

// console.log("🚀 ~ newArr:", newArr);

// find
// const found = arr.find(element => {
// 	return element > 2;
// });

// console.log(found);

// findIndex
// const foundIndex = arr.findIndex(element => {
// 	return element > 2;
// });

// console.log(foundIndex);

// reduce
// const sum = arr.reduce((acc, element) => {
// 	return acc + element;
// }, 0);

// console.log(sum);

// some
// const some = arr.some(element => {
// 	return element > 2;
// });

// console.log(some);

// every
// const every = arr.every(element => {
// 	return element > 0;
// });

// const sumCubo = [1, 2, 3, 4, 5]
// 	.map(element => {
// 		return element ** 3;
// 	})
// 	.reduce((acc, element) => {
// 		return acc + element;
// 	}, 0);

// reverse
// const reversed = arr.reverse();
// console.log("🚀 ~ reversed:", reversed);

// const str = "hola mundo";
// const splitted = str.split(""); -> ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"];
// const reversed = [...splitted].reverse(); -> ["o", "d", "n", "u", "m", " ", "a", "l", "o", "h"];
// const backToString = reversed.join(""); -> "odnum aloh"

// console.log("🚀 ~ splitted:", splitted, reversed, backToString);

// objects

const obj = {
	name: "John",
	age: 30,
	isMarried: false,
	sayHello: function () {
		console.log("Hello");
	},
};

// console.log(obj.name, obj["age"]);

// obj.sayHello();

// CRUD
// Create
obj.lastName = "Doe";

// Read
console.log(obj.name);

// Update
obj.name = "Jane";

// Delete
console.log(obj);
delete obj.age;
console.log(obj);

// const obj2 = { ...obj };
// const obj2 = obj;
// obj2.name = "pepe";

// console.log(obj, obj2);

// helpers

// console.log(obj.hasOwnProperty("name"));

// Object.keys(obj).forEach(key => {
// 	console.log(key);
// });

// Object.values(obj).forEach(value => {
// 	console.log(value);
// });

// Object.entries(obj).forEach(([key, value]) => {
// 	console.log(key, value);
// });

const arrObj = [
	{
		name: "John",
		age: 30,
	},
	{
		name: "Jane",
		age: 25,
	},
];

const objArr = {
	filters: [1231, 12312, 12312],
	sorted: [1231, 12312, 12312],
};

// objArr.filters.;

// arrObj.find(element => {
// 	return element.name === "Jane";
// });
