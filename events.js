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