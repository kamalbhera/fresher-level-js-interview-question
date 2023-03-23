// copy to clipboard trick

function copyToClipboard(text) {
	let textArea = document.createElement("textarea");
	textArea.value = text;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	document.body.removeChild(textArea);
	alert("copied successfully");
}

function handleCopy() {
	const text = document.getElementById("text");
	copyToClipboard(text.innerText);
}
