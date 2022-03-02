"use strict"

var input = document.querySelector("input");
var scoreNumber = document.getElementById("scoreNumber");
var displayPlayer1 = document.getElementById("displayPlayer1");
var displayPlayer2 = document.getElementById("displayPlayer2");
var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var reset = document.getElementById("reset");
var inputValue = document.getElementById("inputValue")
var scorePlayer1 = [];
var scorePlayer2 = [];


// Scrore number changer
input.addEventListener("input", function (){
    scoreNumber.innerHTML = this.value;
});

var results = document.getElementById("inputValue").value;
var results = Number(results);





//Adding first player results
buttonOne.addEventListener("click", function(){
   if(results > scorePlayer1.length && scorePlayer2.length < results){
    var push = scorePlayer1.push("1")
    var number1 = scorePlayer1.length;
    displayPlayer1.innerText = number1;
   } 
   if (results == scorePlayer1.length){
       displayPlayer1.style.color = "darkgreen";
   }
})


//Adding second player results
buttonTwo.addEventListener("click", function(){
   if(results > scorePlayer2.length && scorePlayer1.length < results){
    var push = scorePlayer2.push("1")
    var number2 = scorePlayer2.length;
    displayPlayer2.innerText = number2;
   } 
   if (results == scorePlayer2.length){
       displayPlayer2.style.color = "crimson";
   }
})

reset.addEventListener("click", function(){
    scorePlayer1.length = 0;
    scorePlayer2.length = 0;
    var number2 = scorePlayer2.length;
    displayPlayer2.innerText = number2;
    var number1 = scorePlayer1.length;
    displayPlayer1.innerText = number1;
    displayPlayer1.style.color = "black";
    displayPlayer2.style.color = "black";
})