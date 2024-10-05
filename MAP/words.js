const sentence = "vivan pagal, and gadha, and bonobo and pagal, and gadha, and bonobo hai.";

// Split sentence into words
const words = sentence.split(' ');

// Create a Map to count word occurrences
const wordCount = new Map();

for (let word of words) {
    if (wordCount.has(word)) {
        wordCount.set(word, wordCount.get(word) + 1);
    } else {
        wordCount.set(word, 1);
    }
}

console.log(wordCount);  // Map with word counts






