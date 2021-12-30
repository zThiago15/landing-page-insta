/**
 * ##Celsius to Fahrenheit
 
    Crie uma função que receba uma string em celsius ou fahrenheit e faça a 
    transformação de uma unidade para outra

    C = (F - 32) x 5 / 9

    F = C x 9 / 5 + 32
 */

function conversionTemperature(temperature, name){

   let nameDegree = name.toLowerCase();
   
   
   if(nameDegree == "celsius"){ // convert to F
      let temperatureFahrenheit = temperature * 9 / 5 + 32;
      return `Fahrenheit: ${temperatureFahrenheit.toFixed(0)}F`;

   } else if(nameDegree == "fahrenheit"){ // convert to C
      let temperatureCelsius = (temperature - 32) * 5 / 9;
      return `Celsius: ${temperatureCelsius.toFixed(0)}C`;

   } else {
      throw new Error("Grau inválido");
   }

}

try{
   console.log(conversionTemperature(147, "fahrenheit"))
   //console.log(conversionTemperature(40, "dfsfds")); // Error
   console.log(conversionTemperature(67, "celsius"));

} catch(error){
   console.log(error.message); // just show the message, not the line that the error is at.
}


