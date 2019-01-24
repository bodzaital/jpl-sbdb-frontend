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

	let desName = "";
	let desName_li;
	if (e.object.des_alt.length > 0) {
		
		
		if (e.object.des_alt.length < 4) {
			x("#object-des-alt-showmore").classList = "hide";
		} else {
			x("#object-des-alt-count").innerText = e.object.des_alt.length;	
		}

		for (let i = 0; i < e.object.des_alt.length; i++) {
			let key = Object.keys(e.object.des_alt[i])[0];
			let value = Object.values(e.object.des_alt[i])[0];
			
			if (key == "pri") {
				desName = "primary provisional";
			} else if (key == "com") {
				desName = "numbered comet for dual-classification asteroids";
			} else if (key == "des") {
				desName = "alternate new-style";
			} else if (key == "rn") {
				desName = "roman-numeral comet";
			} else if (key == "yl") {
				desName = "year-letter old-style comet";
			}

			desName_li = document.createElement("li");
			desName_li.innerText = `${value} (${desName})`;
			
			if (i > 2) {
				desName_li.classList = "hidable-li hidden-li";
			}

			x("#object-des-alt").appendChild(desName_li);
		}
	}
}
