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
    
    /**
    *Обработчик, позволяющий взаимодействовать с элементом HTML страницы с ID=progress
    *
    * @var obj $oProgress
    */
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

/**
* Функция, которая фиксирует время завершения загрузки изображения
*/
function MeasureConnectionSpeed() {
    
    /**
    * Время начала загрузки
    *
    * @var int $startTime
    */
    var startTime;
    
    /**
    * Время конца загрузки
    *
    * @var int $endTime
    */
    var endTime;
    
    /**
    * Объект класса Image
    *
    * @var obj $download
    */
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
}

/**
* Алгоритм проверки скорости
*/
function showResults() {
    
    /**
    * Время загрузки изображения (в мс)
    *
    * @var float $duration
    */
    var duration = (endTime - startTime) / 1000;
    
    /**
    * Количество загруженных байт
    *
    * @var int $bitesLoaded
    */
    var bitesLoaded = downloadSize * 8;
    
    /**
    * Скорость в Байт/с
    *
    * @var float $speedBps
    */
    var speedBps = (bitesLoaded / duration).toFixed(2);
    
    /**
    * Скорость в КБайт/с
    *
    * @var float $speedKbps
    */
    var speedKbps = (speedBps / 1024).toFixed(2);
    
    /**
    * Скорость в МБайт/с
    *
    * @var float $speedMbps
    */
    var speedMbps = (speedKbps / 1024).toFixed(2);
    ShowProgressMessage([
        "Your connection speed is:", 
        speedBps + " bps", 
        speedKbps + " kbps", 
        speedMbps + " Mbps"
    ]);
}