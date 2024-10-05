let numbers = prompt("Enter a list of numbers separated by commas:").split(',')
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
alert("smallest number:"+ smallest);