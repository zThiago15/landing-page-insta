/* For

for(let i = 100; i > 0; i--){
    if(i == 50){
       continue; // irá pular esta execução atual
       //break; // sair do loop
    }

    console.log(i); // 100 - 1
}
*/

/* For ... of



let names = ['João', 'maria', 'raimundo']
for(let name of names){
    console.log(name); // irá mostrar cada nome do array 'names'
}
// mostra cada caractere de uma string
*/

let person = {
    name: "Thiago",
    age: 19,
    weight: 80
}

for(let property in person){
    console.log(property); // name of property
    console.log(person[property]) // value
}