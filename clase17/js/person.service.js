export function createPerson(name, email, container) {
	const person = document.createElement("div");
	person.classList.add("person");
	person.innerHTML = `
    <h2>${name}</h2>
    <p>${email}</p>
  `;
	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Eliminar";
	// deleteButton.onclick = deletePerson;
	deleteButton.addEventListener("click", deletePerson);
	person.appendChild(deleteButton);

	container.appendChild(person);
}

export function deletePerson(e) {
	const person = e.target.parentElement;
	person.remove();
}
