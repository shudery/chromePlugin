chrome.extension.onMessage.addListener(function(request) {
	var data = request.match(/data:(.*)/)[1];
	//document.body.innerHTML = data
	//changeColor(data);
	[].forEach.call($("*"), function(a) {
		a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
	})
});

function changeColor(color) {
	document.body.style.backgroundColor = color;
};