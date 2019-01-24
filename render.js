function Render(e)
{
	console.log(e);

	if (e.object.shortname === undefined) {
		x("#object-name").innerText = e.object.fullname;
		x("#object-name").dataset.tooltip = "Object doesn't have a longer name";
		document.title = `SBDB: ${e.object.fullname}`;
	} else {
		x("#object-name").innerText = e.object.shortname;
		x("#object-name").dataset.tooltip = e.object.fullname;
		document.title = `SBDB: ${e.object.shortname}`;
	}

	x("#object-orbit").innerText = `${e.object.orbit_class.name} (${e.object.orbit_class.code})`;
	x("#object-designation").innerText = "#" + e.object.des;

	let designationItem = {};

	if (e.object.des_alt.length > 0) {
		if (e.object.des_alt.length < 4) {
			x("#object-des-alt-showmore").classList = "hide";
		} else {
		}
		x("#object-des-alt-count").innerText = e.object.des_alt.length;	

		for (let i = 0; i < e.object.des_alt.length; i++) {
			designationItem.item = document.createElement("li");
			designationItem.value = document.createElement("span");
			designationItem.type = document.createElement("span");
			
			designationItem.item.appendChild(designationItem.value);
			designationItem.item.appendChild(designationItem.type);
			
			designationItem.value.innerText = Object.values(e.object.des_alt[i])[0];
			
			designationItem.type.innerHTML += "(";
			let key = Object.keys(e.object.des_alt[i])[0];
			if (key == "pri") {
				designationItem.type.innerText += "primary provisional";
			} else if (key == "com") {
				designationItem.type.innerText += "numbered for dual-classification asteroids";
			} else if (key == "des") {
				designationItem.type.innerText += "alternate new-style";
			} else if (key == "rn") {
				designationItem.type.innerText += "roman-numeral";
			} else if (key == "yl") {
				designationItem.type.innerText += "year-letter old-style";
			}
			designationItem.type.innerText += ")";
			
			if (i > 2) {
				designationItem.item.classList = "hidable-li hidden-li";
			}

			designationItem.type.classList = "designation-type";

			x("#object-des-alt").appendChild(designationItem.item);
		}
	}
}

// li > span + span