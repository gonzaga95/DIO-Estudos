const currentNumberWrapper = document.querySelector("#current-number");
let currentNumber = 0;

const decrementButton = document.querySelector("#decrement");
const incrementButton = document.querySelector("#increment");

decrementButton.addEventListener("click", function () {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "#9B0000";
    } else if (currentNumber === 0) {
        currentNumberWrapper.style.color = "black";
    }
    if (currentNumber <= -10) {
        decrementButton.style.visibility = "hidden";
    } else {
        incrementButton.style.visibility = "visible";
    }
});

incrementButton.addEventListener("click", function () {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber > 0) {
        currentNumberWrapper.style.color = "#006400";
    } else if (currentNumber === 0) {
        currentNumberWrapper.style.color = "black";
    }
    if (currentNumber >= 10) {
        incrementButton.style.visibility = "hidden";
    } else {
        decrementButton.style.visibility = "visible";
    }
});

// currentNumberWrapper.addEventListener("change", function () {
//     if (currentNumber > 0) {
//         currentNumberWrapper.style.color = "#006400";
//         if (currentNumber >= 10) {
//             incrementButton.style.display = "none";
//         } else {
//             incrementButton.style.display = "block";
//         }
//     } else if (currentNumber === 0) {
//         currentNumberWrapper.style.color = "black";
//     }
//     if (currentNumber < 0) {
//         currentNumberWrapper.style.color = "#9B0000";
//         if (currentNumber <= -10) {
//             decrementButton.style.visibility = "hidden";
//         } else {
//             decrementButton.style.display = "block";
//         }
//     } else if (currentNumber === 0) {
//         currentNumberWrapper.style.color = "black";
//     }
// });
