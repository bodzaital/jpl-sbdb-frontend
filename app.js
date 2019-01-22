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

let url = new URL(window.location.href);
let sstr = url.searchParams.get("sstr");

let api = "https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=" + sstr + "&orbit-defs=true";

let ajax = new XMLHttpRequest();
ajax.open("GET", api, true);
ajax.send();

ajax.onload = () => {
	if (ajax.readyState === ajax.DONE && ajax.status === 200) {
		Render(JSON.parse(ajax.response));
	}
};

x("#object-designation").addEventListener("click", e => {
	let copyable = x("#copyable-object-designation");
	copyable.value = url;
	
	// Temporarily setting display: block for select() to work.
	// Major hack but It Works(tm).
	copyable.style.display = "block";
	
	copyable.select();
	document.execCommand("copy");
	copyable.style.display = "none";
});