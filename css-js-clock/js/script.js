const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    const secondsToDegre = ((seconds/60)*360) + 90; // plus 90 to offset default rotation
    const minsToDegre = ((mins/60)*360) + 90;
    const hoursToDegre = ((hours/12)*360) + 90;
    secondHand.style.transform = `rotate(${secondsToDegre}deg)`;
    minuteHand.style.transform = `rotate(${minsToDegre}deg)`;
    hourHand.style.transform = `rotate(${hoursToDegre}deg)`;

}

setInterval(setDate,1000);