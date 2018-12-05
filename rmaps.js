function rmapsload(){   
    var rMapsWindow;
    
    document.getElementById("openRmapsWindow").onclick = function() {openRmapsURL()};
	function openRmapsURL() {
  		rMapsWindow = window.open(
    		"https://jamesdean3.github.io/luggagee/",
    		"rMaps-rBagsDoneRight"
          )
	}
    
    document.getElementById("sendTorMaps").onclick = function() {sendMessageToRmaps()};
	function sendMessageToRmaps() {
      rMapsWindow.postMessage("lets see", '*')
    }
    var el = document.createElement('div'),
        b = document.getElementsByTagName('body')[1];
        el.innerHTML = "<p id='openRmapsWindow'>lets do this</p><br><p id='sendTorMaps'>then this</p>";
    b.appendChild(el);
}
