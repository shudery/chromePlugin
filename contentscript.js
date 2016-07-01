var functionHash = {
	outlineFun() {
		[].forEach.call($("*"), function(a) {
			a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
		})
		console.log('add color outline')
	},
	addLinkTarget() {
		[].forEach.call($('a'),function(a){
			a.target = '_blank';
		})
		console.log('add link target')

	},
	remoteLinkTarget() {
		[].forEach.call($('a'),function(a){
			a.target = '_self';
		})
		console.log('remote link target')
	},
}

chrome.extension.onMessage.addListener(function(data) {
	console.log(data+':'+functionHash.hasOwnProperty(data))
	if(functionHash.hasOwnProperty(data)){
		var executeFun = functionHash[data]
		executeFun();
	}
});

