function x(s) {
	return document.querySelector(s);
}

function xs(s) {
	return document.querySelectorAll(s);
}

function JsonToParams(s) {
	let g = "";
	for (let j in s) {
		g += `&${j}=${s[j]}`;
	}
	return g;
}

function ErrorScreen(c) {
	x("article").classList = "onerror";
	if (c == 400) {
		x("#object-name").innerText = "Object not found.";
		x("#object-orbit").innerText = "The database did not understand the search. Tip: only use standard Latin characters." + ` (${c})`;
	} else if (c == 404) {
		x("#object-name").innerText = "Object not found.";
		x("#object-orbit").innerText = "No object was found using the requested search query." + ` (${c})`;
	} else if (c == 412) {
		x("#object-name").innerText = "API version mismatch.";
		x("#object-orbit").innerText = "No connection could be made to the database as it has a different API version." + ` (${c})`;
	} else {
		c = 520;
		x("#object-name").innerText = "An error happened.";
		x("#object-orbit").innerText = "An error happened." + ` (${c})`;
	}
}