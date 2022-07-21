let boxes = document.querySelectorAll(".boxes");
const button = document.querySelector("button");
let count = 0;
let result = document.getElementById("result");

for (let box of boxes) {
  box.addEventListener("click", () => {
    count++;
    if (count % 2 == 0) {
      box.innerHTML = "O";
    } else if (count % 2 !== 0) {
      box.innerHTML = "X";
    }

    // conditions for X winning
    if (
      (boxes[0].innerHTML == "X" &&
        boxes[1].innerHTML == "X" &&
        boxes[2].innerHTML == "X") ||
      (boxes[3].innerHTML == "X" &&
        boxes[4].innerHTML == "X" &&
        boxes[5].innerHTML == "X") ||
      (boxes[6].innerHTML == "X" &&
        boxes[7].innerHTML == "X" &&
        boxes[8].innerHTML == "X") ||
      (boxes[0].innerHTML == "X" &&
        boxes[3].innerHTML == "X" &&
        boxes[6].innerHTML == "X") ||
      (boxes[1].innerHTML == "X" &&
        boxes[4].innerHTML == "X" &&
        boxes[7].innerHTML == "X") ||
      (boxes[2].innerHTML == "X" &&
        boxes[5].innerHTML == "X" &&
        boxes[8].innerHTML == "X") ||
      (boxes[0].innerHTML == "X" &&
        boxes[4].innerHTML == "X" &&
        boxes[8].innerHTML == "X") ||
      (boxes[2].innerHTML == "X" &&
        boxes[4].innerHTML == "X" &&
        boxes[6].innerHTML == "X")
    ) {
      result.innerText = "X wins!";
    }
    // conditions for O winning
    else if (
      (boxes[0].innerHTML == "O" &&
        boxes[1].innerHTML == "O" &&
        boxes[2].innerHTML == "O") ||
      (boxes[3].innerHTML == "O" &&
        boxes[4].innerHTML == "O" &&
        boxes[5].innerHTML == "O") ||
      (boxes[6].innerHTML == "O" &&
        boxes[7].innerHTML == "O" &&
        boxes[8].innerHTML == "O") ||
      (boxes[0].innerHTML == "O" &&
        boxes[3].innerHTML == "O" &&
        boxes[6].innerHTML == "O") ||
      (boxes[1].innerHTML == "O" &&
        boxes[4].innerHTML == "O" &&
        boxes[7].innerHTML == "O") ||
      (boxes[2].innerHTML == "O" &&
        boxes[5].innerHTML == "O" &&
        boxes[8].innerHTML == "O") ||
      (boxes[0].innerHTML == "O" &&
        boxes[4].innerHTML == "O" &&
        boxes[8].innerHTML == "O") ||
      (boxes[2].innerHTML == "O" &&
        boxes[4].innerHTML == "O" &&
        boxes[6].innerHTML == "O")
    ) {
      result.innerText = "O wins!";
    }
  });

  //   clears all field
  button.addEventListener("click", () => {
    box.innerHTML = "";
    result.innerText = "";
    count = 0;
  });
}
