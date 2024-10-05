let numbers = prompt("Enter a list of numbers separated by commas:").split(',')
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
alert("Largest number:"+ largest);