const { validarEmail, validarCPF } = require('./validators');

describe('Validação de Email', () => {
  test('deve validar um e-mail válido simples', () => {
    expect(validarEmail('teste@empresa.com')).toBe(true);
  });

  test('deve validar e-mail com pontos e números', () => {
    expect(validarEmail('usuario.123@exemplo.com.br')).toBe(true);
  });

  test('deve validar e-mail com caracteres especiais permitidos', () => {
    expect(validarEmail('user+tag@domain.org')).toBe(true);
  });

  test('deve retornar falso para e-mail sem @', () => {
    expect(validarEmail('emailErrado')).toBe(false);
  });

  test('deve retornar falso para e-mail sem domínio', () => {
    expect(validarEmail('user@')).toBe(false);
  });

  test('deve retornar falso para e-mail sem extensão', () => {
    expect(validarEmail('user@domain')).toBe(false);
  });

  test('deve retornar falso para argumentos não string', () => {
    expect(validarEmail(123)).toBe(false);
    expect(validarEmail(null)).toBe(false);
    expect(validarEmail(undefined)).toBe(false);
  });
});

describe('Validação de CPF', () => {
  test('deve validar CPF válido com pontuação', () => {
    expect(validarCPF('111.444.777-35')).toBe(true);
  });

  test('deve validar CPF válido sem pontuação', () => {
    expect(validarCPF('11144477735')).toBe(true);
  });

  test('deve retornar falso para CPF com menos dígitos', () => {
    expect(validarCPF('123')).toBe(false);
  });

  test('deve retornar falso para CPF com mais dígitos', () => {
    expect(validarCPF('123456789012')).toBe(false);
  });

  test('deve retornar falso para CPF com números repetidos', () => {
    expect(validarCPF('111.111.111-11')).toBe(false);
    expect(validarCPF('22222222222')).toBe(false);
  });

  test('deve retornar falso para CPF com dígitos verificadores incorretos', () => {
    expect(validarCPF('111.444.777-00')).toBe(false);
    expect(validarCPF('123.456.789-00')).toBe(false);
  });

  test('deve retornar falso para argumentos não string', () => {
    expect(validarCPF(123)).toBe(false);
    expect(validarCPF(null)).toBe(false);
    expect(validarCPF(undefined)).toBe(false);
  });

  test('deve retornar falso para string vazia', () => {
    expect(validarCPF('')).toBe(false);
  });
});
