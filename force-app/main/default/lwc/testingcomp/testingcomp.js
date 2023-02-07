import { LightningElement } from 'lwc';

export default class Testingcomp extends LightningElement {
    const cells = document.querySelectorAll("id");
let turn = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    if (this.textContent === "") {
      this.textContent = turn;
      if (checkForWin()) {
        alert("Player " + turn + " wins!");
        reset();
      } else if (checkForDraw()) {
        alert("Draw!");
        reset();
      } else {
        turn = turn === "X" ? "O" : "X";
      }
    }
  });
}

function checkForWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      cells[a].textContent === turn &&
      cells[b].textContent === turn &&
      cells[c].textContent === turn
    ) {
      return true;
    }
  }
  return false;
}

function checkForDraw() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }
  return true

}