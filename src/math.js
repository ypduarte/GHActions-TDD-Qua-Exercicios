// Corrigido fatorial
function fatorial(n) {
  n = Number(n); // Convertendo qualquer string que seja número para um valor numérico
  if (isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }
  if (n === 0) return 1;
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// Corrigido fibonacci
function fibonnacci(n) {
  n = Number(n); // Convertendo qualquer string que seja número para um valor numérico
  if (isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n <= 0) {
    throw new Error("Não existe fibonnacci de número menor ou igual a zero");
  }
  if (n === 1) return 1;
  let a = 0, b = 1, c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Corrigido ehPrimo
function ehPrimo(n) {
  n = Number(n); // Convertendo qualquer string que seja número para um valor numérico
  if (isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n <= 1) {
    throw new Error("Não existe número primo de número menor ou igual a 1");
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = { fatorial, fibonnacci, ehPrimo };
