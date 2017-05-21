var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg"; 
var downloadSize = 4995374; //bytes

function ShowProgressMessage(msg) {
    var oProgress = document.getElementById("progress");
    if (oProgress) {
        oProgress.innerHTML = msg;
    }
}