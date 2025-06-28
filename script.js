setInterval(setClock,1000);

const hourHand = document.querySelector('[data-hour-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');

function setClock() {
    const date = new Date();
    const secondRatio = date.getSeconds()/60;
    const minuteRatio = (secondRatio + date.getMinutes())/60;
    const hourRatio = (minuteRatio + date.getHours())/12;

    setRotation(secondHand,secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
    
}

function setRotation(element, rotationRatio) {
    // console.log(element, rotationRatio * 360);
    element.style.setProperty('--rotate',rotationRatio*360);
}

setClock();
