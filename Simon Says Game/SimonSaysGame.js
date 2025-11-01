let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "pink", "blue", "orange"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btn = document.querySelector(".btn");

document.addEventListener("keydown", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    //random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
}

function checkSeq (idx) {

    if (userSeq[idx] == gameSeq[idx]){
        // console.log ("Correct sequence");
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000)
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart`;

        displayHighest();

        document.querySelector("body").classList.add("wrong")
        setTimeout(function (){
            document.querySelector("body").classList.remove("wrong");
        }, 250)

        reset ();
    }
}

function btnPress () {
    let btn = this;
    // console.log (this);
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function userflash (btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250);
}

let highestScore  = document.querySelector(".highest");

function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function displayHighest () {
    if (highestScore > level) {
        highestScore = level;
    }
    highestScore.innerHTML = `Highest Score: <br> ${level}`;
}