// import utils, { sayHello, name } from "./js/utils.js";
// import utils from "./utils.js";

//refactorizar = reescribir el código para mejorarlo, sin modificar su comportamiento

import { validate } from "./validators.js";
import { createPerson } from "./person.service.js";

const PI_NUMBER = 3.1416;
const apple = "apple";
const apples = ["apple", "apple", "apple"];

const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const container = document.getElementById("container");

function handleSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	createPerson(data.get("name"), data.get("email"), container);
	event.target.reset();
}

function init() {
	form.addEventListener("submit", handleSubmit);
	inputs.forEach(input => {
		input.addEventListener("keyup", validate);
		input.value = "hola";
	});
}

init();
