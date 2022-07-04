
function realTimeClock() {

    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = "AM";


    if(hours === 0) {
        hours = 12;
    }

    if(hours === 12) {
        amOrPm = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let randomColor = (Math.floor(Math.random() * 16777215)).toString(16);

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("amOrPm").innerHTML = amOrPm;

    document.getElementById("hours").style.color = "#" + randomColor;
    document.getElementById("seconds").style.color = "#" + randomColor;
    document.getElementById("minutes").style.color = "#" + randomColor;


}



setInterval( () => realTimeClock(), 1000);