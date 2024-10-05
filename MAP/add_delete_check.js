const students = new Map();

// Adding key-value pairs
students.set('Alice', 85);
students.set('Bob', 92);
students.set('Charlie', 78);

// Deleting a key-value pair
students.delete('Charlie');

// Checking if a key exists
console.log(students.has('Bob'));  // true
console.log(students.has('Charlie'));  // false

// Map size
console.log(students.size);  // 2