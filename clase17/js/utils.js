export function removeAndAddClass(element, classToRemove, classToAdd) {
	element.classList.remove(classToRemove);
	element.classList.add(classToAdd);
}

export default {
	removeAndAddClass,
};
