function somar(a, b) {
  // Versão simples da soma
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) return 'erro: divisão por zero';
  return a / b;
}

// Nova função adicionada na develop
function porcentagem(valor, percent) {
  return (valor * percent) / 100;
}

module.exports = { somar, subtrair, multiplicar, dividir, porcentagem };
