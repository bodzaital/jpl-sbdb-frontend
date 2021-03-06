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
		x(".name").innerText = "Object not found.";
		x("#object-orbit").innerText = "The database did not understand the search. Tip: only use standard Latin characters." + ` (${c})`;
	} else if (c == 404) {
		x(".name").innerText = "Object not found.";
		x("#object-orbit").innerText = "No object was found using the requested search query." + ` (${c})`;
	} else if (c == 412) {
		x(".name").innerText = "API version mismatch.";
		x("#object-orbit").innerText = "No connection could be made to the database as it has a different API version." + ` (${c})`;
	} else if (c == 403) {
		x(".name").innerText = "Forbidden.";
		x("#object-orbit").innerText = "The service is either down or refuses to fulfill your request. Check back later." + ` (${c})`;
	} else {
		c = 520;
		x(".name").innerText = "An error happened.";
		x("#object-orbit").innerText = "An error happened." + ` (${c})`;
	}
}

// Creates a single line of orbital elements.
function ElementNodeBuilder(element, OrbitalElement) {
	let row = document.createElement("tr");
	let sym = document.createElement("td");
	
	if (element === "orbital") {
		sym.innerText = OrbitalElement.label;
	} else if (element === "phys") {
		sym.innerText = OrbitalElement.name;
	}

	let val = document.createElement("td");
	val.innerText = `${OrbitalElement.value}`;

	if (OrbitalElement.units !== null) {
		val.innerText += ` ${OrbitalElement.units}`;
	}

	row.appendChild(sym);
	row.appendChild(val);

	let rowDescription = document.createElement("tr");
	rowDescription.classList = "hidden-row";
	let description = document.createElement("td");
	description.setAttribute("colspan", "2");

	if (element === "orbital") {
		description.innerText = OrbitalElement.title;
	} else if (element === "phys") {
		description.innerText = OrbitalElement.desc;
	}

	description.classList = "description";

	rowDescription.appendChild(description);

	return [row, rowDescription];
}

function ToggleClass(element, on) {
	if (element.classList == on) {
		element.classList = "";
	} else {
		element.classList = on;
	}
}