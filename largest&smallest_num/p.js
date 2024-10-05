let numbers=prompt("enter numbers with comma separation").split(',')
let largest=numbers[0];
for (i=0;i<numbers.length;i++){
    if (numbers[i]>largest){
        largest=numbers[i]
    }
}
alert("the largest number is "+largest)    


