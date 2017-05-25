/**
* Адрес загружаемого изображения
*
* @var string $imageAddr
*/
var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg"; 

/**
* Точный размер загружаемого изображения
*
* @var int $downloadSize
*/
var downloadSize = 4995374; //bytes

/**
* Работа со свойством {@link $msg}
*
* Если аргумент определен, то устанавливается новое
* значение свойства msg
* (отслеживание пргресса проверки скорости)
*
* @param string $msg сообщение
*/
function ShowProgressMessage(msg) {
    var oProgress = document.getElementById("progress");
    if (oProgress) {
        oProgress.innerHTML = msg;
    }
}

/**
* Функция отображения статуса проверки скорости
*/
function InitiateSpeedDetection() {
    ShowProgressMessage("Loading the image, please wait...");
    window.setTimeout(MeasureConnectionSpeed, 1);
};

if (window.addEventListener) {
    window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', InitiateSpeedDetection);
}

function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }

/**
* Обработчик ошибки загрузки изображения
*/
    download.onerror = function (err, msg) {
        ShowProgressMessage("Invalid image, or error downloading");
    }

/**
* Алгоритм проверки скорости
*/
    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        ShowProgressMessage([
            "Your connection speed is:", 
            speedBps + " bps", 
            speedKbps + " kbps", 
            speedMbps + " Mbps"
        ]);
    }
}