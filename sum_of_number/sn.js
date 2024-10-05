let numbers=prompt("Enter the numbers,").split(',')
let sum=0
for (let i=0;i< numbers.length;i++){
        sum+=Number(numbers[i])  ;
}
alert("the sum of the nubers entered is"+sum)