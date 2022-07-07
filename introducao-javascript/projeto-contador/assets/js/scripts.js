let currentNumberWrapper = document.querySelector("#current-number");
let currentNumber = 0;

function increment() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
}