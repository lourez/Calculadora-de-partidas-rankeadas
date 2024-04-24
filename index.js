function calcularRankeadas(vitorias, derrotas) {
  // Calcula o saldo de Rankeadas
  let saldoRankeadas = vitorias - derrotas;

  // Determina o nível do jogador com base na quantidade de vitórias
  let nivel;
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 10 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Retorna uma mensagem com o saldo de Rankeadas e o nível do jogador
  return `O Herói tem de saldo de ${saldoRankeadas} está no nível de ${nivel}`;
}

// Exemplo de uso da função
let mensagem = calcularRankeadas(90, 20);
console.log(mensagem); // Saída: "O Herói tem de saldo de 70 está no nível de Diamante"
