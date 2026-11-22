const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const resetButton = document.querySelector("#reset");
const winPointOption = document.querySelector("#winpoint");

let p1Score = 0;
let p2Score = 0;
let winPoint = 3;
let isGamerOver = false;

function reset() {
  isGamerOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
}

p1Button.addEventListener("click", function () {
  if (!isGamerOver) {
    p1Score += 1;
    if (p1Score === winPoint) {
      isGamerOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGamerOver) {
    p2Score += 1;
    if (p2Score === winPoint) {
      isGamerOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", reset);

winPointOption.addEventListener("change", function () {
  winPoint = parseInt(this.value);
  reset();
});
