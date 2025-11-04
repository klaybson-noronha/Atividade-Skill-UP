const { somar, subtrair, multiplicar, dividir } = require('./calculadora');

describe('Funções da calculadora', () => {
  test('deve somar dois números', () => {
    expect(somar(10, 5)).toBe(15);
  });

  test('deve subtrair corretamente', () => {
    expect(subtrair(10, 5)).toBe(5);
  });

  test('deve multiplicar corretamente', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test('deve dividir corretamente', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test('não deve dividir por zero', () => {
    expect(dividir(10, 0)).toBe('erro: divisão por zero');
  });
});
