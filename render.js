function Render(e)
{
	console.log(e);

	if (e.object.shortname === undefined) {
		console.log("Doesn't have shortname.");
		x("#object-shortname").innerText = e.object.fullname;
	} else {
		x("#object-shortname").innerText = e.object.shortname;
		x("#object-fullname").innerText = " — " + e.object.fullname;
	}

	x("#object-orbit").innerText = `${e.object.orbit_class.name} (${e.object.orbit_class.code})`;
	x("#object-designation").innerText = "#" + e.object.des;
}
