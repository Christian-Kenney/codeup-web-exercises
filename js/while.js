"use strict";

var x = 2;
while(x < 66000){
    console.log(x);
    x = x * 2;
}


var allCones = Math.floor(Math.random() * 50) + 50;
var coneSold = 0;

console.log("total of cones " + allCones);
do{
    var coneSell = Math.floor(Math.random() * 5) + 1;
    var coneLeft = allCones - coneSold;
        if(coneLeft === 0){
            break;
        }
        else if(coneSell <= coneLeft){
            coneSold = coneSell + coneSold;
            console.log(coneSell + " cones sold");
        }
        else if(coneSell > coneLeft){
            console.log("Cannnot sell you " + coneSell + " I only have " + coneLeft);
        }


}while (coneSold <= allCones);

console.log("Yay, I sold them all");
    console.log("Total number sold: " + coneSold);
    console.log("number of cones I had: " + allCones);