function Render(e)
{
	console.log(e);

	if (e.object.shortname === undefined) {
		x("#object-name").innerText = e.object.fullname;
		x("#object-name").dataset.tooltip = "Object doesn't have a longer name";
	} else {
		x("#object-name").innerText = e.object.shortname;
		x("#object-name").dataset.tooltip = e.object.fullname;
	}

	x("#object-orbit").innerText = `${e.object.orbit_class.name} (${e.object.orbit_class.code})`;
	x("#object-designation").innerText = "#" + e.object.des;
}
