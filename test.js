"use strict";

document.body.style.backgroundColor = "lightgray";

var idCounter = 0;
var myContent = document.getElementById("content");

myContent.style.height = "300px";
myContent.style.width = "300px";
myContent.style.backgroundColor = "white";

document
    .getElementById("greenBtn")
    .addEventListener("click", function () {
        addColoredBlock("green");
    });

function addColoredBlock(colorTo) {
    let newBlock = document.createElement("div");
    newBlock.classList.add("block");

    newBlock.id = ++idCounter;

    switch (colorTo) {
        case "green":
            newBlock.classList.add("green");
            break;
        case "red":
            newBlock.classList.add("red");
            break;
        case "blue":
            newBlock.classList.add("blue");
            break;
    }

    myContent.appendChild(newBlock);
}

function ticTacToc() {
    let ticBoard = ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue",];

    for (let index = 0; index < ticBoard.length; index++) {
        addColoredBlock(ticBoard[index]);
    }

}

function arrayTestCode2d() {
    let array2d = [
        ["one", "two", "tree"],
        ["en", "två", "tre"]
    ];

    console.log(array2d);
    console.log("only one dim expretion:", array2d[0]);
}

function arrayTestCode3d() {
    let array3d = [
        [["one"], ["two"], ["tree"]],
        [["en"], ["två"], ["tre"]]
    ];

    let expected = "one"

    console.log(array3d);
    console.log("two dim expretion:", array3d[0][0]);

    console.log("Assert", array3d[0][0][0] === expected ? "test passed" : "failed")
}