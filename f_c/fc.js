var opt= prompt("enter 1 for fahrenheit to celsius\nenter2 for celsius to fahrenheit")
if(opt==1){
    var inp= prompt("enter the temperature in farenheit")
    var ans=(inp - 32) * 5/9
    alert("the temperature in celsius is:"+ans)
}
if(opt==2){
    var inp= prompt("enter the temperature in celsius")
    var ans=(inp * 9/5) + 32 
    alert("the temperature in fahrenheit is:"+ans)
}
else(
    alert("invalid option try again")
)