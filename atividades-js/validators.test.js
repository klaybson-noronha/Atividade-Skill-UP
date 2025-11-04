const { validarEmail, validarCPF } = require('./validators');

describe('Validação de Email', () => {
  test('deve validar um e-mail válido', () => {
    expect(validarEmail('teste@empresa.com')).toBe(true);
  });

  test('deve retornar falso para e-mail inválido', () => {
    expect(validarEmail('emailErrado')).toBe(false);
  });
});

describe('Validação de CPF', () => {
  test('cpf válido deve retornar true', () => {
    expect(validarCPF('123.456.789-09')).toBe(true);
  });

  test('cpf com menos dígitos deve retornar false', () => {
    expect(validarCPF('123')).toBe(false);
  });

  test('cpf com números repetidos deve retornar false', () => {
    expect(validarCPF('111.111.111-11')).toBe(false);
  });
});
