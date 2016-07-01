document.addEventListener('DOMContentLoaded', function() {
  var data = '?'
  document.getElementById('box1').onclick = function() {
    data = 'outlineFun';
    //chrome.runtime.sendMessage('by runtime.data:' + data, sender, sendResponse);
    sendData(data)
  }
  document.getElementById('box2').onclick = function() {
    data = 'addLinkTarget';
    sendData(data)
  }
  document.getElementById('box3').onclick = function() {
    data = 'remoteLinkTarget';
    sendData(data)
  }
  document.getElementById('box4').onclick = function() {
    data = 'yellow';
  }
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    $('#box4 button').text('???');
  });

  function sendData(data) {
    chrome.tabs.query({
      active: true
    }, function(tab) {
      chrome.tabs.sendMessage(tab[0].id, data);
    });
  };
})