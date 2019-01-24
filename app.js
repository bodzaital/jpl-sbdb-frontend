let url = new URL(window.location.href);
let sstr = url.searchParams.get("sstr");

let options = {
	"alt-des": true,
	"alt-spk": true,
	"phys-par": true
};

let api = "https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=" + sstr + JsonToParams(options);

let ajax = new XMLHttpRequest();
ajax.open("GET", api, true);
ajax.send();

ajax.onload = () => {
	if (ajax.readyState === ajax.DONE && ajax.status === 200) {
		let resp = JSON.parse(ajax.response);
		if (resp.message != "specified object was not found") {
			if (resp.signature.version == "1.1") {
				Render(JSON.parse(ajax.response));
			} else {
				console.log("API version mismatch.");
			}
		} else {
			console.log("Object not found.");
		}
	}
};