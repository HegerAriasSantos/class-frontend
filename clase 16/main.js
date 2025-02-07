// setTimeout(() => {
// 	console.log("Hola");
// }, 0);

// function calculate(a, b, fun) {
// 	return fun(a, b);
// }

// function sum(a, b) {
// 	setTimeout(() => {
// 		return a + b;
// 	}, 1000);
// }

// console.log(calculate(2, 3, sum)); // 5

// [1, 2, 3, 4, 5, 6].forEach((element, index) => {
// 	console.log(element, index);
// });

// const intervalId = setInterval(() => {
// 	console.log("Hola");
// }, 1000);

// setTimeout(() => {
// 	clearInterval(intervalId);
// }, 5000);

function returnPromise(isValid = true) {
	return new Promise((resolve, reject) => {
		if (isValid) {
			setTimeout(() => {
				resolve("Hola");
			}, 2000);
		} else reject("Error");
	});
}

// console.log(returnPromise());

// returnPromise(false)
// 	// .then(function (response) {
// 	// 	console.log(response);
// 	// })
// 	// .then(response => {
// 	// 	return console.log(response);
// 	// })
// 	.then(response => console.log(response))
// 	.catch(error => console.error(error))
// 	.finally(() => {
// 		console.log("Finally");
// 	});

// async () => {};

// async function asyncAwaitExample() {
// 	try {
// 		const response = await returnPromise(false);
// 		console.log(response);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// asyncAwaitExample();

// http -> protocolo de comunicación en la web :3
// request -> headers, body, method, url
// headers -> content-type, authorization, user-agent
// body -> data
// method -> GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD
// method.GET -> obtener datos ( no tiene body)
// method.POST -> enviar datos ( tiene body)
// method.PUT -> actualizar datos (tiene body)
// method.DELETE -> eliminar datos (no tiene body)
// method.PATCH -> actualizar datos parcialmente (tiene body)
// method.OPTIONS -> obtener información del servidor (no tiene body)
// method.HEAD -> obtener headers (no tiene body)
// url -> protocolo://dominio:puerto/ruta?query

// JSON = JavaScript Object Notation

// const obj = {
// 	name: "John",
// 	age: 30,
// 	isMarried: false,
// };

BASE_URL = "https://jsonplaceholder.typicode.com";
let comments = [];
fetch(`${BASE_URL}/comments?postId=1`, { method: "GET" })
	.then(response => {
		console.log("🚀 ~ response:", response);
		return response.json();
	})
	.then(data => {
		comments = data;
		comments.forEach(comment => {
			createComment(comment);
		});
		console.log(data);
	});

function createComment(comment) {
	const commentElement = document.createElement("div");
	commentElement.classList.add("comment");
	commentElement.innerHTML = `
    <h2>${comment.name}</h2>
    <p>${comment.email}</p>
    <p>${comment.body}</p>
  `;
	document.body.appendChild(commentElement);
}

// HTTP response -> status, headers, body
// status -> 2xx, 3xx, 4xx, 5xx
// status.2xx -> todo salió bien
// status.3xx -> redirecciones
// status.4xx -> error del cliente
// status.5xx -> error del servidor
// headers -> content-type, authorization, user-agent
// body -> data
