let player1Image = document.querySelector(".leftImage");
let player2Image = document.querySelector(".rightImage");
let changeScore = document.querySelectorAll(".points");
let output = document.querySelector(".middle h3");
let pointofone = document.querySelector(".point-of-p1");
let pointoftwo = document.querySelector(".point-of-p2");
let outputOne = document.querySelector(".output-1");
let outputTwo = document.querySelector(".output-2");
let playtext = document.querySelector(".play-text");

pointofne = 0;
pointofwo = 0;

let player1Generate;
let player2Generate;
let numberOne;
let numberTwo;
let arr2 = [
    "images/face-5.png",
    "images/face-4.png",
    "images/face-1.png",
    "images/face-6.png",
    "images/face-3.png",
    "images/face-2.png"
];

function randomFunction1() {
    let randomOne = Math.floor(Math.random() * 6)
    // console.log(randomOne)
    return arr2[randomOne];
}


function changeTextOne() {
    console.log("hello");
    pointofne = pointofne + 1;

    pointofone.innerHTML = `${pointofne}`;
    console.log(pointofne);

}

function changeTextTwo() {
    console.log("hello");
    pointofwo = pointofwo + 1;
    pointoftwo.innerHTML = `${pointofwo}`;
    console.log(pointofwo);
}

setTimeout(function () {
    if (pointofne == 5) {
        console.log("pankaj");
        alert("Player 1 won");

    } else if (pointofwo == 5) {
        console.log("kumar");
        alert("Player 2 won");

    }
}, 2200);


function player1Handler(e) {
    player1Image.src = "images/rolldice.png";
    player2Image.src = "images/rolldice.png";
    // console.log(player1Image.src)
    player1Image.classList.add("animateLeft");
    output.innerHTML = "Playing....";
    playtext.style.color = "white";
    outputOne.innerHTML = "none";
    outputTwo.innerHTML = "none";


    setTimeout(() => {
        player1Image.classList.remove("animateLeft");
        player1Generate = randomFunction1();

        let subStringFirst = player1Generate.substring(12, 13);

        numberOne = Number(subStringFirst);

        console.log(numberOne);
        outputOne.innerHTML = `${numberOne}`;

        player1Image.src = player1Generate;


    }, 1500);

}
// console.log(player1Generate)

function player2Handler(e) {
    player2Image.src = "images/rolldice.png";
    // console.log(player1Image.src)
    player2Image.classList.add("animateRight");

    setTimeout(function () {
        player2Image.classList.remove("animateRight");
        let player2Generate = randomFunction1();

        let subStringSecond = player2Generate.substring(12, 13);

        numberTwo = Number(subStringSecond);

        outputTwo.innerHTML = `${numberTwo}`;

        console.log(numberTwo);
        player2Image.src = player2Generate;

    }, 1500);

    setTimeout(function () {
        if (numberOne == numberTwo) {
            output.innerHTML = "Match Draw";
            console.log(numberOne);


        } else if (numberOne > numberTwo) {
            output.innerHTML = "Player 1 Won";
            playtext.style.color = "orangered";
            changeTextOne();
        } else if (numberOne < numberTwo) {
            output.innerHTML = "Player 2 Won";
            playtext.style.color = "green";
            changeTextTwo();
        }
    }, 2000)
}








