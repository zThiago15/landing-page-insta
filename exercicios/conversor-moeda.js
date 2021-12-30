// converter de Real pra Dólar 1U$ - R$,70

function converter(valor, moeda){ //real, dolar

    let nomeMoeda = moeda.toLowerCase();

    let conversao;
    
    if(nomeMoeda == "real"){ //conveter de R pra D
        let dolar = valor * 0.17; 
        return "$" + dolar.toFixed(2);

    } else if(nomeMoeda == "dólar"){
        let real = valor * 5.72;
        return "R$" + real.toFixed(2);

    } else {
        return "Moeda inválida";
    }

}

// converter valores abaixo para dólar
console.log(converter(5.67, "real")); 
console.log(converter(200, "real"));

// converter para real
console.log(converter(500, "dólar"));
console.log(converter(467, "dólar"));