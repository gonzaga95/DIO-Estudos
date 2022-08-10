// Substitua a palavra "palindromo" pela palavra a ser verificada:
let palavra = "ama";

function verificaPalindromo (string) {
  if (!string) return;
  
  return string.split("").reverse().join("") === string;
}

console.log("Pelo méotodo 1: " + verificaPalindromo(palavra));

