document.addEventListener('DOMContentLoaded', function() {
  var data = '?'
  document.getElementById('box1').onclick = function() {
    data = 'red';
    //chrome.runtime.sendMessage('by runtime.data:' + data, sender, sendResponse);
    sendData(data)

  }
  document.getElementById('box2').onclick = function() {
    data = 'blue';
    sendData(data)
  }
  document.getElementById('box3').onclick = function() {
    data = 'green';
    sendData(data)
  }
  document.getElementById('box4').onclick = function() {
    data = 'yellow';
    sendData(data)
  }

  function sendData(data) {
    chrome.tabs.query({
      active: true
    }, function(tab) {
      chrome.tabs.sendMessage(tab[0].id, 'hello, content script, from background page. there are some data:' + data);
    });
  };
})