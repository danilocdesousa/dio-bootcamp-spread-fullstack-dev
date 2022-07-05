var currentNumber = document.getElementById("current-number");
var totalClicks = document.getElementById("total-clicks");
var counter = 0;
var number = 0;

function increment() {
    if (number < 9999) {
        number += 1;
        number >= 0 ? currentNumber.style.color = "#2EB872" : currentNumber.style.color = "#FA4659";
        currentNumber.innerHTML = number;
    }
}

function decrement() {
    if (number > -9999) {
        number -= 1;
        number >= 0 ? currentNumber.style.color = "#2EB872" : currentNumber.style.color = "#FA4659";
        currentNumber.innerHTML = number;
    }
}

document.addEventListener("click", function () {
    counter++;
    totalClicks.innerHTML = counter;
});