// Exercice 1
console.log("Bonjour", "Monde");

// Exercice 2

function addition(a, b) {
  let sum = a + b;
  console.log(sum);
}

addition(3, 5); // Console.log(8)

// Exercice 3
function isEven(number) {
  if (number % 2 === 0) {
    return `Le chiffe ${number} est pair`;
  } else {
    return `Le chiffre ${number} est impair`;
  }
}

console.log(isEven(4)); // Pair
console.log(isEven(7)); // Impair

// Exercice 4
function countWords(str) {
  let words = str.split(" ");
  return words.length;
}

console.log(countWords("Bonjour tout le monde")); // 4
console.log(countWords("Javascript est amusant!")); // 3

// Exercice 5
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Bonjour")); // ruojnoB
console.log(reverseString("Javascript")); // tpircsavaJ
