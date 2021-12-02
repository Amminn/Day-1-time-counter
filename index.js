const displayMessage = document.querySelector(".countdown-text")
const displayDays = document.getElementById("days")
const displayHours = document.getElementById("hours")
const displayMin = document.getElementById("min")
const displaySec = document.getElementById("sec")

function renderCountdown(){
    // const christmas = 25
    // Task:
    // - Setting the date we're counting down to
    // let countDownDate = new Date("Jan 01, 2022 00:00:00").getTime();
    let countDownDate = new Date("Jan 01, 2022 00:00:00").getTime();
    // - Get today's date (you only need the day).
    let now = new Date().getTime();
    // - Calculate remaining days
    let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    displayDays.innerHTML = `${days}`
    displayHours.innerHTML = `${hours}`
    displayMin.innerHTML = `${minutes}`
    displaySec.innerHTML = `${seconds}`

    // - Display remaining days in countdownDisplay.
    if (distance < 0 ) {
        clearInterval()
        displayMessage.innerHTML = "Happy new year";
        displayDays.innerHTML = `00`
        displayHours.innerHTML = `00`
        displayMin.innerHTML = `00`
        displaySec.innerHTML = `00`
    }
}
setInterval(function() {
    renderCountdown()
}, 1000);

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.