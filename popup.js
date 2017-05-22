var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg"; 
var downloadSize = 4995374; //bytes

function ShowProgressMessage(msg) {
    var oProgress = document.getElementById("progress");
    if (oProgress) {
        oProgress.innerHTML = msg;
    }
}

    download.onerror = function (err, msg) {
        ShowProgressMessage("Invalid image, or error downloading");
    }

    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        ShowProgressMessage([
            "Speed"
        ]);
    }
}