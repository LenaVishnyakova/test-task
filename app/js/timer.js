function countdown(elementName, minutes, seconds) {
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
    }

    element = document.getElementById(elementName);

    function startTimer() {
        endTime = (+new Date()) + 1000 * (60 * minutes + seconds) + 500;
        updateTimer();
    }

    function updateTimer() {
        msLeft = endTime - (+new Date());

        if (msLeft < 1000) {
            startTimer();
        } else {
            time = new Date(msLeft);
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();

            element.innerHTML = twoDigits(hours) + ':' + twoDigits(mins) + ':' + twoDigits(time.getUTCSeconds());

            setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        }
    }

    startTimer();
}

countdown("timer", 30, 0);
