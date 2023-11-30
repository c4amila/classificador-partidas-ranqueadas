
// CALCULADORA DE PARTIDAS RANQUEADAS
//RESGATAR MEU NOME
let userName = getFirstName("Camila Ferreira dos Santos", " ")
console.log("Seja bem vinda " + userName + "!")

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}

//CALCULAR O SALDO DE VITORIAS
function rankedMatches(wins, defeats){
    let result = wins - defeats
    return result
}

//VERIFICAR RANKS
function rank(){
    let calcWins = rankedMatches(80, 10)
    let level = ""
    if(calcWins <= 10){
        level = "Ferro"
    } else if(calcWins > 10 && calcWins <= 20){
        level = "Bronze"
    } else if(calcWins > 20 && calcWins <= 50){
        level = "Prata"
    } else if(calcWins > 50 && calcWins <= 80){
        level = "Ouro"
    } else if(calcWins > 80 && calcWins <= 90){
        level = "Diamante"
    } else if(calcWins > 90 && calcWins <= 100){
        level = "Lendário"
    } else if(calcWins >= 101){
        level = "Imortal"
    }

    return `O Herói tem de saldo de ${calcWins} vitórias e está no nível de ${level}`
}

    console.log(rank())


