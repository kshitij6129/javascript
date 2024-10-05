let targetnumber= (Math.floor(Math.random()*100))+1
let guess= null;

for (; guess !== targetnumber;) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (guess > targetnumber) {
        alert("think lower");
    } else if (guess < targetnumber) {
        alert("think higher");
    } else if (guess==targetnumber){
        alert("congrats you guessed it");
    }
    else{
        alert("invalid input")
    }
}
