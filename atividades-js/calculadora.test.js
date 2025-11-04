const { 
  somar, 
  subtrair, 
  multiplicar, 
  dividir, 
  potencia, 
  raizQuadrada,
  porcentagem 
} = require('./calculadora');

describe('Funções da calculadora', () => {
  describe('Operação de soma', () => {
    test('deve somar dois números positivos', () => {
      expect(somar(10, 5)).toBe(15);
    });

    test('deve somar números negativos', () => {
      expect(somar(-5, -3)).toBe(-8);
    });

    test('deve somar número positivo e negativo', () => {
      expect(somar(10, -5)).toBe(5);
    });

    test('deve lançar erro para argumentos não numéricos', () => {
      expect(() => somar('a', 5)).toThrow('Argumentos devem ser números');
      expect(() => somar(5, null)).toThrow('Argumentos devem ser números');
    });
  });

  describe('Operação de subtração', () => {
    test('deve subtrair corretamente', () => {
      expect(subtrair(10, 5)).toBe(5);
    });

    test('deve subtrair números negativos', () => {
      expect(subtrair(-5, -3)).toBe(-2);
    });

    test('deve lançar erro para argumentos não numéricos', () => {
      expect(() => subtrair('a', 5)).toThrow('Argumentos devem ser números');
    });
  });

  describe('Operação de multiplicação', () => {
    test('deve multiplicar corretamente', () => {
      expect(multiplicar(3, 4)).toBe(12);
    });

    test('deve multiplicar por zero', () => {
      expect(multiplicar(5, 0)).toBe(0);
    });

    test('deve lançar erro para argumentos não numéricos', () => {
      expect(() => multiplicar('a', 5)).toThrow('Argumentos devem ser números');
    });
  });

  describe('Operação de divisão', () => {
    test('deve dividir corretamente', () => {
      expect(dividir(10, 2)).toBe(5);
    });

    test('deve lançar erro ao dividir por zero', () => {
      expect(() => dividir(10, 0)).toThrow('Divisão por zero não é permitida');
    });

    test('deve lançar erro para argumentos não numéricos', () => {
      expect(() => dividir('a', 5)).toThrow('Argumentos devem ser números');
    });
  });

  describe('Operação de potência', () => {
    test('deve calcular potência corretamente', () => {
      expect(potencia(2, 3)).toBe(8);
    });

    test('deve calcular potência de zero', () => {
      expect(potencia(5, 0)).toBe(1);
    });

    test('deve lançar erro para argumentos não numéricos', () => {
      expect(() => potencia('a', 5)).toThrow('Argumentos devem ser números');
    });
  });

  describe('Operação de raiz quadrada', () => {
    test('deve calcular raiz quadrada corretamente', () => {
      expect(raizQuadrada(9)).toBe(3);
    });

    test('deve calcular raiz quadrada de zero', () => {
      expect(raizQuadrada(0)).toBe(0);
    });

    test('deve lançar erro para números negativos', () => {
      expect(() => raizQuadrada(-9)).toThrow('Não é possível calcular raiz quadrada de número negativo');
    });

    test('deve lançar erro para argumentos não numéricos', () => {
      expect(() => raizQuadrada('a')).toThrow('Argumento deve ser um número');
    });
  });

  describe('Operação de porcentagem', () => {
    test('deve calcular porcentagem corretamente', () => {
      expect(porcentagem(100, 10)).toBe(10);
    });

    test('deve calcular porcentagem de zero', () => {
      expect(porcentagem(0, 50)).toBe(0);
    });

    test('deve calcular com porcentagem zero', () => {
      expect(porcentagem(100, 0)).toBe(0);
    });

    test('deve lançar erro para argumentos não numéricos', () => {
      expect(() => porcentagem('a', 5)).toThrow('Argumentos devem ser números');
      expect(() => porcentagem(100, 'b')).toThrow('Argumentos devem ser números');
    });
  });
});
