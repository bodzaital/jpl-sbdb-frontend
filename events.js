x("#designation").addEventListener("click", e => {
	let copyable = x("#copyable-object-designation");
	copyable.value = url;
	
	// Temporarily setting display: block for select() to work.
	// Major hack but It Works(tm).
	copyable.style.display = "block";
	
	copyable.select();
	document.execCommand("copy");
	copyable.style.display = "none";
});

x("#object-showall-des-alt").addEventListener("click", e => {
	e.preventDefault();
	let items = xs("[class^=hidable-li]");
	
	if (showstates.alt_des) {
		items.forEach(el => {
			el.classList = "hidable-li hidden-li";
		});

		e.target.classList = "link-button";
		e.target.innerText = "Show all";
		showstates.alt_des = false;
	} else {
		items.forEach(el => {
			el.classList = "hidable-li";
		});

		e.target.classList = "link-button isopen";
		e.target.innerText = "Show less";
		showstates.alt_des = true;
	}
});

x("#search").addEventListener("keydown", e => {
	if (e.key === "Enter") {
		let sstr = x("#search").value;
		let targetURI = `//${location.host}${location.pathname}?sstr=${sstr}`
		window.location = targetURI;
	}
});