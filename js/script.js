function sayMyName(name = ""){
    if(name === "") {
        throw "Nome vazio";
    }
    console.log("depois do erro")
}

try{
    console.log(sayMyName());
} catch(e) { // irá receber o 'throw'
    console.log(e); // mostrar seu conteúdo
}

console.log("após a função de erro")