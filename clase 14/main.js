const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const container = document.getElementById("container");

form.addEventListener("submit", handleSubmit);
inputs.forEach(input => {
	input.addEventListener("keyup", validate);
	input.value = "hola";
});

function handleSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	createPerson(data.get("name"), data.get("email"));
	event.target.reset();
}

function validate(event) {
	const input = event.target;
	const type = input.getAttribute("type");
	let isValid = true;

	switch (type) {
		case "text":
			isValid = validateText(input);
			break;
		case "email":
			isValid = validateEmail(input);
			break;
		case "password":
			isValid = validatePassword(input);
			break;

		default:
			alert("No se ha encontrado el tipo de input");
			break;
	}
	changeColor(input, isValid);
	showErrorMessage(input, isValid);
}

function changeColor(input, isValid) {
	if (isValid) {
		input.classList.remove("is-invalid");
		input.classList.add("is-valid");
	} else {
		input.classList.remove("is-valid");
		input.classList.add("is-invalid");
	}
}

function showErrorMessage(input, isValid) {
	const inputName = input.name;
	const errorSpan = document.getElementById(`error-${inputName}`);
	if (errorSpan === null) return;

	if (isValid) {
		errorSpan.classList.remove("show");
		errorSpan.classList.add("hide");
		errorSpan.innerHTML = "";
	} else {
		errorSpan.classList.remove("hide");
		errorSpan.classList.add("show");

		if (input.type === "text") {
			errorSpan.innerHTML = "El campo debe tener al menos 3 caracteres";
		} else {
			errorSpan.innerHTML = "El campo no puede estar vació";
		}
	}
}

function validateText(input) {
	const value = input.value.trim();

	if (value === "") return false;
	if (value.length < 3) return false;

	return true;
}
function validateEmail(input) {
	const value = input.value;
	if (value.trim() === "") {
		return false;
	}
	return true;
}

function validatePassword(input) {
	const value = input.value;
	if (value.trim() === "") {
		return false;
	}
	return true;
}

function createPerson(name, email) {
	const person = document.createElement("div");
	person.classList.add("person");
	person.innerHTML = `
    <h2>${name}</h2>
    <p>${email}</p>
    <button onclick="deletePerson(event)">Eliminar</button>
  `;
	container.appendChild(person);
}

function deletePerson(e) {
	const person = e.target.parentElement;
	person.remove();
}
/*

  tarea: CRUD similar a google keep
  - poder crear una tarea que tenga titulo y description, cada uno de esos campos debe ser validado, el titulo debe tener al menos 3 caracteres y la description no puede estar vacía, el campo description debe ser un textarea.
  - poder listar todas las tareas creadas, cada tarea debe tener un botón que diga eliminar y otro que diga editar.
  - poder eliminar una tarea, dentro de cada tarea debe haber un botón que diga eliminar y al hacer click en ese botón se debe eliminar la tarea.
  - poder editar una tarea, dentro de cada tarea debe haber un botón que diga editar y al hacer click en ese botón se debe mostrar un modal que dentro del mismo haya un formulario con los campos de titulo y description precargados con los valores de la tarea, al hacer submit en ese formulario se debe actualizar la tarea.
*/
