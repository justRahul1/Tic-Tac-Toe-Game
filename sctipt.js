let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector(".resetBtn");
let newBtnn = document.querySelector(".newBtn");
let container = document.querySelector(".msgContainer");
let msgWin = document.querySelector(".msg")

let turn0 = true;

const winPtrn = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
turn0 = true;
enableBoxes();
msgWin.classList.add("hide");
};

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;

    checkwinner();
  });
});


const showWinner = (winner) => {
msgWin.innerText = `Congratulations, the winner is $(winner)`;
msgWin.classList.remove("hide");
disableBoxes();
}

const checkwinner = () => {
  for (pattern of winPtrn) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if (pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val)
        }
    }
  }
}; 


newBtnn.addEventListener("click", resetGame);
restBtn.addEventListener("click", resetGame);
