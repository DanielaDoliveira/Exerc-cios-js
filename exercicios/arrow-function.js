
//  RESOLUÇÃO — Exercícios de Arrow Functions



/**1)
 * Recebe um número e retorna o seu triplo.
 *
 * @param {number} numero - O número a ser triplicado.
 * @returns {number} O valor do número multiplicado por 3.
 *
 * @example
 * triplicar(5); // 15
 */
const triplicar = (numero) => {
  return numero * 3;
}

console.log(triplicar(5));  // 15
console.log(triplicar(10)); // 30




/**
 * 2) Gera um nick de jogador personalizado a partir do nome e do ano de nascimento.
 *
 * @param {string} nome            - O nome do jogador. Será convertido para letras minúsculas.
 * @param {number} anoDeNascimento - O ano de nascimento do jogador.
 * @returns {string} O nick no formato "@nome_ano_pro".
 *
 * @example
 * gerarNick("Daniela", 2010); // "@daniela_2010_pro"
 */
const gerarNick = (nome, anoDeNascimento) => {
    return `@${nome}_${anoDeNascimento}_pro`;
};

console.log(gerarNick("Daniela", 2010)); // @Daniela_2010_pro
console.log(gerarNick("CARLOS", 2008));  // @CARLOS_2008_pro

/**
 * 3)  Determina o resultado de um duelo entre o jogador e um monstro.
 * Se o ataque do jogador for suficiente para derrotar o monstro, retorna vitória.
 * Caso contrário, informa quanta vida o monstro ainda possui.
 *
 * @param {number} ataqueDoJogador - O valor do ataque desferido pelo jogador.
 * @param {number} vidaDoMonstro   - A quantidade de vida atual do monstro.
 * @returns {string} Mensagem com o resultado do duelo.
 *
 * @example
 * resultadoDuelo(50, 30); // "Vitória! O monstro foi derrotado! "
 * resultadoDuelo(20, 50); // "O monstro resistiu! Vida restante: 30"
 */

const resultadoDuelo = (ataqueDoJogador, vidaDoMonstro) => {

    if (ataqueDoJogador >= vidaDoMonstro) {
        return "Vitória! O monstro foi derrotado! ";
    } 
    
    else {
        const vidaRestante = vidaDoMonstro - ataqueDoJogador;
        return `O monstro resistiu! Vida restante: ${vidaRestante}`;
    }
};

console.log(resultadoDuelo(50, 30)); // Vitória! O monstro foi derrotado!
console.log(resultadoDuelo(20, 50)); // O monstro resistiu! Vida restante: 30



/**
 * 4) Calcula o dano final recebido por um personagem após a redução da armadura.
 * Cada tipo de armadura oferece uma proteção diferente:
 * - "Ferro": reduz 10 pontos de dano.
 * - "Aço":   reduz 25 pontos de dano.
 * - Outros:  sem redução.
 * O dano final nunca pode ser menor que zero.
 *
 * @param {string} tipoArmadura  - O material da armadura ("Ferro", "Aço" ou outro).
 * @param {number} danoRecebido  - O valor bruto do dano recebido antes da redução.
 * @returns {number} O valor final do dano após aplicar a resistência da armadura.
 *
 * @example
 * calcularResistencia("Ferro", 40); // 30
 * calcularResistencia("Aço", 20);   // 0  (dano não fica negativo)
 * calcularResistencia("Couro", 15); // 15
 */
const calcularResistencia = (tipoArmadura, danoRecebido) => {
    
  let danoFinal = danoRecebido;

    if (tipoArmadura === "Ferro") {
        danoFinal = danoRecebido - 10;
    } else if (tipoArmadura === "Aço") {
        danoFinal = danoRecebido - 25;
    }

    if (danoFinal < 0) {
        danoFinal = 0;
    }

    return danoFinal;
};

console.log(calcularResistencia("Ferro", 40)); // 30
console.log(calcularResistencia("Aço", 20));   // 0
console.log(calcularResistencia("Couro", 15)); // 15



/**
 * 5) Define a patente de um jogador com base na sua quantidade de pontos.
 * As faixas de pontuação e suas patentes são:
 * - Menos de 1000:        Bronze
 * - Entre 1000 e 2000:    Prata
 * - Entre 2001 e 3000:    Ouro
 * - Acima de 3000:        Platina
 *
 * @param {number} pontos - A quantidade de pontos acumulados pelo jogador.
 * @returns {string} Frase informando os pontos e a patente conquistada.
 *
 * @example
 * definirPatente(500);  // "Com 500 pontos, sua patente é: Bronze!"
 * definirPatente(1500); // "Com 1500 pontos, sua patente é: Prata!"
 * definirPatente(2500); // "Com 2500 pontos, sua patente é: Ouro!"
 * definirPatente(5000); // "Com 5000 pontos, sua patente é: Platina!"
 */
const definirPatente = (pontos) => {
    let patente = "";

    if (pontos < 1000) {
        patente = "Bronze";
    } else if (pontos <= 2000) {
        patente = "Prata";
    } else if (pontos <= 3000) {
        patente = "Ouro";
    } else {
        patente = "Platina";
    }

    return `Com ${pontos} pontos, sua patente é: ${patente}!`;
};

console.log(definirPatente(500));  // Com 500 pontos, sua patente é: Bronze!
console.log(definirPatente(1500)); // Com 1500 pontos, sua patente é: Prata!
console.log(definirPatente(2500)); // Com 2500 pontos, sua patente é: Ouro!
console.log(definirPatente(5000)); // Com 5000 pontos, sua patente é: Platina!