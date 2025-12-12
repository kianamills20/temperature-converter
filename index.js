// convert Fahrenheit to Celsius  
/** 
 * @param {number} fahrenheit
 * @returns {number} celsius
 */
function convertToCelsius(Fahrenheit) {
    return (Fahrenheit - 32) * (5 / 9);
}
// <0(°C) is very cold
// <20(°C) is cold
// <30(°C) is warm
// <40(°C) is hot
// >=40(°C) is very hot
function describeTemperature(Fahrenheit) {
    const Celsius = convertToCelsius(Fahrenheit);
    let message = "";
if (Celsius < 0) {message = "it is very cold!";}
 else if (Celsius < 20) {message = "it is cold!";
 } else if (Celsius < 30) {message = "it is warm!";
 } else if (Celsius < 40) {message = "it is hot!";
 }else {message = "it is very hot!";
 }
 return `${Fahrenheit}°F is ${Celsius}°C. That is ${message}.`;
}
const Fahrenheit = Number(prompt("Enter temperature in Fahrenheit"));
const message = describeTemperature(Fahrenheit);
alert(message);