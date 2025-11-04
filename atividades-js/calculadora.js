function somar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Argumentos devem ser números');
  }
  return a + b;
}

function subtrair(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Argumentos devem ser números');
  }
  return a - b;
}

function multiplicar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Argumentos devem ser números');
  }
  return a * b;
}

function dividir(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Argumentos devem ser números');
  }
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida');
  }
  return a / b;
}

function potencia(base, expoente) {
  if (typeof base !== 'number' || typeof expoente !== 'number') {
    throw new Error('Argumentos devem ser números');
  }
  return Math.pow(base, expoente);
}

function raizQuadrada(numero) {
  if (typeof numero !== 'number') {
    throw new Error('Argumento deve ser um número');
  }
  if (numero < 0) {
    throw new Error('Não é possível calcular raiz quadrada de número negativo');
  }
  return Math.sqrt(numero);
}

module.exports = { 
  somar, 
  subtrair, 
  multiplicar, 
  dividir, 
  potencia, 
  raizQuadrada 
};
