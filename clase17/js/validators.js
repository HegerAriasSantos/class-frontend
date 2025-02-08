import { removeAndAddClass } from "./utils.js";

export function validate(event) {
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
	if (isValid) removeAndAddClass(input, "is-invalid", "is-valid");
	else removeAndAddClass(input, "is-valid", "is-invalid");
}

function showErrorMessage(input, isValid) {
	const inputName = input.name;
	const errorSpan = document.getElementById(`error-${inputName}`);
	if (errorSpan === null) return;

	if (isValid) {
		removeAndAddClass(errorSpan, "show", "hide");
		errorSpan.innerHTML = "";
	} else {
		removeAndAddClass(errorSpan, "hide", "show");
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
