/*
    main.js file to control functionality of stopwatch
*/

window.onload = function() {
    var seconds = 00;
    var milliseconds = 00;
    var updateMilliseconds = document.getElementById('milliseconds')
    var updateSeconds = document.getElementById('seconds')
    var buttonstart = document.getElementById('start_button')
    var buttonstop = document.getElementById('stop_button')
    var buttonreset = document.getElementById('reset_button')
    var Interval;
    /*
    This method controls the event of clicking the start button
    */
    buttonstart.onclick = function() {
        clearInterval(Interval)
        Interval = setInterval(Timer, 10);
    }

    /*
    This method controls the event of clicking the stop button
    */
    buttonstop.onclick = function() {
        clearInterval(Interval)
    }

    /*
    This method controls the event of clicking the reset button
    */
    buttonreset.onclick = function() {
            clearInterval(Interval)
            seconds = 0;
            milliseconds = 0;
            updateMilliseconds.innerHTML = "0" + milliseconds;
            updateSeconds.innerHTML = "0" + seconds;

        }
        /*
        This method updates the time that has passed once stopwatch is started.
        */
    function Timer() {
        milliseconds++;
        if (milliseconds <= 9) {
            updateMilliseconds.innerHTML = "0" + milliseconds;
        }
        if (milliseconds > 9) {
            updateMilliseconds.innerHTML = milliseconds;
        }
        if (milliseconds > 99) {
            seconds++;
            milliseconds = 0;
            updateMilliseconds.innerHTML = "0" + milliseconds;
            updateSeconds.innerHTML = "0" + seconds;
        }
        if (seconds > 9) {
            updateSeconds.innerHTML = seconds;
        }
    }
}