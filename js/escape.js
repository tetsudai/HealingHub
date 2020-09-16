/* Adapted from CSS Tricks and Dave Clement on codepen.io */

function getAway() {
    window.location.replace("http://google.com"); // Change current tab
    window.open("http://weather.com", "_newtab"); // Open new tab and switch to it.
    console.log("[tetsudai] Escape Key activated")
}

/* Trigger when escape key is pressed */
$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        getAway();
    }
    console.log("[tetsudai] keyCode == 27")
});


