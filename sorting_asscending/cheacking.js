let numbers = prompt("enter numbers with comma seperations:").split(',').map(Number);
let isSorted = true;

for (let i = 0; i < numbers.length ; i++) {
    if (numbers[i] > numbers[i + 1]) {
        isSorted = fasle;
        break;
    }
}

if (isSorted) {
    alert("The array is sorted in ascending order.");
} else {
    alert("The array is not sorted in ascending order.");
}
