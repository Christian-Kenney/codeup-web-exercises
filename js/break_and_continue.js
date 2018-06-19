var userInput = prompt("please enter a odd number between 1-50");

while(userInput % 2 == 0  || userInput > 50 || userInput < 1){
    userInput = prompt("please enter a odd number between 1-50");
}

for (var x = 1; x < 50; x+=2){
    if(x == userInput){
        console.log("Yikes... Skipping " + userInput);
        continue;
    }
    console.log("Here is an odd number: " + x);
}