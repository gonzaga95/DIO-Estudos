// Substitua a palavra "palindromo" pela palavra a ser verificada:
let palavra = "ama";

function verificaPalindromo (string) {
  if (!string) return;
  
  return string.split("").reverse().join("") === string;
}

console.log("Pelo méotodo 1: " + verificaPalindromo(palavra));

function verificaPalindromo2 (string) {
    if (!string) return;

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.lenght - 1 -i]) {
            return false;
        }
    }

    return true;
}

console.log("Pelo méotodo 2: " + verificaPalindromo2(palavra));