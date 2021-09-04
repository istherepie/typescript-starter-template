import { Hello } from "./dummy"

document.addEventListener('DOMContentLoaded', event => {
	let title = document.getElementById("title")

	if (title === null) {
		return
	}

	title.textContent = Hello()
})