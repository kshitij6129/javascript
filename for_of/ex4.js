const userMap = new Map([
    ['name', 'Aliceeeeeeeeeeeeeeeeeeeeee'],
    ['age', 250],
    ['country', 'Uganda']
]);

for (let [key, value] of userMap) {
    alert(`${key}: ${value}`);
}