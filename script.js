let current_score = 0;
let player = [0, 0];
let active = 0;
let playerName = [0, 0];
playerName[0] = prompt("Enter player 1 name");
playerName[1] = prompt("Enter player 2 name");
function init() {
  current_score = 0;
  active = 0;
  player = [0, 0];
  document.querySelector(".total-0").textContent = player[0];
  document.querySelector(".total-1").textContent = player[1];
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
  document.querySelector(".player-0").classList.add("active");
  document.querySelector(".player-1").classList.remove("active");
  document.querySelector(".overlay").classList.add("hidden");
  document.querySelector(".player-0-name").textContent = playerName[0];
  document.querySelector(".player-1-name").textContent = playerName[1];
}
function switchPlayer() {
  current_score = 0;
  document.querySelector(`#current-${active}`).textContent = current_score;
  active = active === 0 ? 1 : 0;
  document.querySelector(".player-0").classList.toggle("active");
  document.querySelector(".player-1").classList.toggle("active");
}
document.querySelector(".roll-dice").addEventListener("click", () => {
  document.querySelector("img").animate(
    [
      // keyframes
      { transform: "rotateX(0) rotateY(0) rotateZ(0)" },
      { transform: "rotateX(180deg) rotateY(600deg) rotateZ(270deg)" },
    ],
    {
      // timing options
      duration: 1000,
      iterations: 1,
    }
  );
  let dice = Math.trunc(Math.random() * 6) + 1;
  document.querySelector("img").src = `dice-${dice}.png`;

  if (dice !== 1) {
    current_score += dice;
    document.querySelector(`#current-${active}`).textContent = current_score;
  } else {
    current_score = 0;
    document.querySelector(`#current-${active}`).textContent = current_score;
    switchPlayer();
  }
});

document.querySelector(".hold").addEventListener("click", () => {
  player[active] += current_score;
  document.querySelector(`.total-${active}`).textContent = player[active];
  if (player[active] >= 10) {
    console.log(`Player ${active + 1} won!`);
    document.querySelector(
      ".winner"
    ).textContent = `${playerName[active]} won! 🎉`;
    document.querySelector(".overlay").classList.toggle("hidden");
  }
  switchPlayer();
});

document.querySelector(".play-again").addEventListener("click", () => {
  console.log("hey");
  init();
});
document.querySelector(".play-again-overlay").addEventListener("click", () => {
  init();
});
init();
