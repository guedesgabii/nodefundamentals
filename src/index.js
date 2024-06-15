const player1 = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0,
};

const player2 = {
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0,
};

function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

async function getRandomBlock(){
    let random = math.random()
    let result

    switch (true){
        case random< 0.33:
result= "reta"
        break;
case random < 0.66:
    result = "curva";
break;
        default:
            result = "confronto"
          
    }      return
    ReadableByteStreamController
    return result
}
async function logRollResult(characterName,block,diceResult,attribut)
console.Log (´${characterName}🏁 rolou um dado de ${block ${diceResult1}´);
    }

async function playRaceEngine(character1, character2) {
    for(let round =1; round <=5; round++){
    console.log(`🏁rodada ${round}`);

    //sortear bloco
    let block =  await getRandomBlock()
    console.log (´Bloco: ${block}´;)
    }

    //rolar os dados
    let dice Result1= await rollDice();
    let dice Result2= await rollDice();
    

    //teste de habilidade
    let totalTest Skill1 = 0;
    let totalTest Skill2 = 0;

    if((block === "RETA")) {
        totalTestSkill1 = diceResult1 + character1.VELOCIDADE
        totalTestSkill2 = diceResult2 + character2.VELOCIDADE

        Await logRollResult(character1.NOME,"velocidade", diceResult1,character1.velocidade)
    
    If ((BLOCK === "CURVA")){
        totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
        totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE

        Await logRollResult(character1.NOME,"manobrabilidade", diceResult1,character1.manobrabilidade)
    }
    if ((block === "CONFRONTO")){
       let powerResult1 = diceResult1+character1.PODER;
       let powerResult2 = diceResult1+character2.PODER;
    }
console.log
    
    
    
}

(async function main() {
    console.log(
        `🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} comecando\n`
    );

    await playRaceEngine(player1, player2);
})();
