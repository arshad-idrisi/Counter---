const plusButton = document.querySelector("#plus-btn");
const minusButton = document.querySelector("#minus-btn");
const countScore = document.querySelector(".count");
const inputTag = document.querySelector(".inputTag");
const resetBtn = document.querySelector("#reset-btn");


plusButton.addEventListener("click", () => {
    const countValue = parseInt(countScore.innerText)
    const inputtagValue = parseInt(inputTag.value)
    countScore.innerText = countValue + inputtagValue
});

minusButton.addEventListener("click", () => {
    const countValue = parseInt(countScore.innerText)
    const inputtagValue = parseInt(inputTag.value)
    countScore.innerText = countValue - inputtagValue
});

resetBtn.addEventListener("click", () => {
    countScore.innerText = 0
});