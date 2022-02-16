const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    console.log(seconds);
    const secondDegree = (seconds / 60) * 360 + 90;
    if (secondDegree === 90) {
        secondHand.classList.add("no-transition");
    } else {
        secondHand.classList.remove("no-transition");
    }
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const minutes = currentDate.getMinutes();
    const minDegree = (minutes / 60) * 360 + 90;
    if (minDegree === 90) {
        minHand.classList.add("no-transition");
    } else {
        minHand.classList.remove("no-transition");
    }
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = currentDate.getHours();
    const hourDegree = (hour / 12) * 360 + 90;
    if (hourDegree === 90) {
        hourHand.classList.add("no-transition");
    } else {
        hourHand.classList.remove("no-transition");
    }
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
