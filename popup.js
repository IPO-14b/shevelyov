var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg"; 
var downloadSize = 4995374; //bytes

function ShowProgressMessage(msg) {
    var oProgress = document.getElementById("progress");
    if (oProgress) {
        oProgress.innerHTML = msg;
    }
}

    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        ShowProgressMessage([
            "Speed"
        ]);
    }
}