// script.js
function updateDigitalClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateAnalogClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

document.getElementById('show-digital').addEventListener('click', function() {
    document.getElementById('digital-clock').style.display = 'block';
    document.getElementById('analog-clock').style.display = 'none';
});

document.getElementById('show-analog').addEventListener('click', function() {
    document.getElementById('digital-clock').style.display = 'none';
    document.getElementById('analog-clock').style.display = 'block';
});

// Initial calls to display clocks immediately
updateDigitalClock();
updateAnalogClock();

// Update the clocks every second
setInterval(updateDigitalClock, 1000);
setInterval(updateAnalogClock, 1000);

// Show the digital clock by default
document.getElementById('show-digital').click();
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const clockFace = document.querySelector('.clock-face');

    // Array of colors to cycle through
    const colors = ['#ff8c00', '#4caf50', '#2196f3', '#ffeb3b', '#ff5722'];

    // Counter to keep track of the current color index
    let colorIndex = 0;

    // Function to change the clock face color
    function changeColor() {
        clockFace.style.borderColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length; // Increment color index and loop back to the beginning if necessary
    }

    // Event listener to change the clock face color when clicked
    clockFace.addEventListener('click', changeColor);
});

