chrome.extension.onMessage.addListener(function(request) {
	var data = request.match(/data:(.*)/)[1];
	//document.body.innerHTML = data
	changeColor(data);
});

function changeColor(color) {
	document.body.style.backgroundColor = color;
};