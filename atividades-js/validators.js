// Funções simples de validação usando regex
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarCPF(cpf) {
  // remove pontos e traços
  const apenasNumeros = cpf.replace(/\D/g, '');

  // verifica se tem 11 dígitos
  if (apenasNumeros.length !== 11) return false;

  // regex básica pra bloquear CPFs repetidos
  if (/^(\d)\1+$/.test(apenasNumeros)) return false;

  return true;
}

module.exports = { validarEmail, validarCPF };
