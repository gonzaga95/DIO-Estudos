let num1 = 5;
let num2 = 4;

function operadores(a, b) {
  const iguais = a === b;
  const maiorQueDez = a + b > 10;
  const maiorQueVinte = a + b > 20;
  let resultado;
  
  if (iguais && maiorQueDez && maiorQueVinte) {
    resultado = `Os números ${a} e ${b} são iguais. Sua soma é ${a+b}, que é maior que 10 e maior que 20.`;
  } else if (iguais && maiorQueDez && !maiorQueVinte) {
    resultado = `Os números ${a} e ${b} são iguais. Sua soma é ${a+b}, que é maior que 10 e menor que 20.`;
  } else if (iguais && !maiorQueDez && !maiorQueVinte) {
    resultado = `Os números ${a} e ${b} são iguais. Sua soma é ${a+b}, que é menor que 10 e menor que 20.`;
  } else if (!iguais && maiorQueDez && maiorQueVinte) {
    resultado = `Os números ${a} e ${b} não são iguais. Sua soma é ${a+b}, que é maior que 10 e maior que 20.`;
  } else if (!iguais && maiorQueDez && !maiorQueVinte) {
    resultado = `Os números ${a} e ${b} não são iguais. Sua soma é ${a+b}, que é maior que 10 e menor que 20.`;
  } else if (!iguais && !maiorQueDez && !maiorQueVinte) {
    resultado = `Os números ${a} e ${b} não são iguais. Sua soma é ${a+b}, que é menor que 10 e menor que 20.`;
  }
  console.log(resultado);
}

operadores(num1, num2);