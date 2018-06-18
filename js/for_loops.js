"use strict";

function showMultiplicationTable(testSubject){
    for(var x = 1; x <= 10; x++){
        console.log(testSubject + " x " + x + " = " + parseInt(testSubject * x));
    }
}

showMultiplicationTable(7);

for(var i = 0; i < 20; i++){
   var randomNum = Math.floor(Math.random() * 180) + 20;
   if (randomNum % 2== 0){
       console.log(randomNum + " is even");
   }
   else{
       console.log(randomNum + " is odd");
   }
}

for(var i=1;i<=9;i++){
    var a='';
    for(var j=1;j<=i;j++){
        var a=a+i;

    }

    console.log(a);
}

for(var x = 100; x > 0; x-=5){
    console.log(x);
}

