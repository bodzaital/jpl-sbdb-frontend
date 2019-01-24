function x(s) {
	return document.querySelector(s);
}

function xs(s) {
	return document.querySelectorAll(s);
}

function ToClipboard(s) {
	let a = x("#object-designation");
	console.log(a);
	a.select();
	document.execCommand("copy");
}

function JsonToParams(s) {
	let g = "";
	for (let j in s) {
		g += `&${j}=${s[j]}`;
	}
	return g;
}