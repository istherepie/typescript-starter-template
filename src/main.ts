import { Hello } from "./dummy";

document.addEventListener("DOMContentLoaded", () => {
	const title = document.getElementById("title");

	if (title === null) {
		return;
	}

	title.textContent = Hello();
});