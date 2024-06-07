let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player x, player y

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enabledboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turnO) {
            btn.innerText = "O";
            turnO = false;
        } else {
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;

        checkwinner();
    })
});
 
const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations!, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disabledboxes();
}
const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }

};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

