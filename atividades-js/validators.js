// Funções simples de validação usando regex
function validarEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }
  
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validarCPF(cpf) {
  if (typeof cpf !== 'string') {
    return false;
  }

  // Remove pontos, traços e espaços
  const apenasNumeros = cpf.replace(/\D/g, '');

  // Verifica se tem 11 dígitos
  if (apenasNumeros.length !== 11) return false;

  // Regex para bloquear CPFs com todos os dígitos iguais
  if (/^(\d)\1+$/.test(apenasNumeros)) return false;

  // Validação dos dígitos verificadores
  let soma = 0;
  let resto;

  // Validação do primeiro dígito verificador
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(apenasNumeros.substring(i - 1, i)) * (11 - i);
  }
  
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(apenasNumeros.substring(9, 10))) return false;

  // Validação do segundo dígito verificador
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(apenasNumeros.substring(i - 1, i)) * (12 - i);
  }
  
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(apenasNumeros.substring(10, 11))) return false;

  return true;
}

module.exports = { validarEmail, validarCPF };
