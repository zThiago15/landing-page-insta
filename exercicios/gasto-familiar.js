/**
    ## Sistema de gastos familiar 

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas []
        * despesas []
    
    Agora, crie uma função que irá calcular o total de receitas[entrada de dinheiro] e despesas[saída de dinheiro] e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

 */




let contaFamiliar = {
    receitas: [3000, 565],
    despesas: [200, 100, 150, 60, 80],
}


function totalDespesaReceita(receitas, despesas){ // params're array

    // somar receitas
    let totalRec = 0;

    for(let i = 0; i < receitas.length; i++){
        totalRec += receitas[i];
    }

    // somar despesas
    let totalDesp = 0;

    for(let i = 0; i < despesas.length; i++){
        totalDesp += despesas[i];
    }

    // calculo de saldo e verificar se está negativo ou positivado
    let saldo = totalRec - totalDesp;

    if(saldo < 0){
        console.log("Saldo negativo");
    } else if(saldo >= 0){
        console.log("Saldo positivo");
    }

    return `Valor do saldo: R$${saldo.toFixed(2)}`;
    // .toFixed() -> quantidade de números após a casa decimal

}

console.log(totalDespesaReceita(contaFamiliar.receitas, contaFamiliar.despesas));

