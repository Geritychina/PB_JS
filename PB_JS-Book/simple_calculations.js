function squareArea([arg1]) {
    let a = parseInt(arg1);
    let area = a * a;
    console.log('Square area = '+ area);
}
//Square area 1
function convertInchesToCentimeters([arg1]) {
    let inches = parseFloat(arg1);
    let centimeters = inches * 2.54;
    console.log('Centimeters = ' + centimeters);
}
//Convert inches to centimeters 2

function greetings(input) {
    let name = input[0];
    console.log(`Hello, ${name}!`); 
}
//Greeting by name 3

function solve(input) {
    console.log(
      `You are ${input[0]} ${input[1]}, a ${input[2]}-years old person from ${input[3]}.`);
}
//Concatenate Data 4

function trapeziodArea(input) {
    let b1 = parseFloat(input[0]);
    let b2 = parseFloat(input[1]);
    let h = parseFloat(input[2]);
    let area = (b1 + b2) * h /2;
    console.log("Trapezoid area = "+ area);
}
//Trapezoid area 5 

function calculateCircleAreaAndPerimeter(input) {
    let r = parseInt(input[0]);
    console.log("Area= "+ (Math.PI * r * r));

    console.log("Perimeter= " + (2 * Math.PI * r));
}
//Circle area and perimeter 6

function calculateRectangleArea(input) {
    let x1 = parseFloat(input[0]);
    let y1 = parseFloat(input[1]);
    let x2 = parseFloat(input[2]);
    let y2 = parseFloat(input[3]);
    let width = Math.max(x1,x2) - Math.min(x1,x2);
    let height = Math.max(y1,y2) - Math.min(y1,y2);

    console.log(width * height);
    console.log(2 * (width + height));
}
//Rectangle area 7 

function triangleArea(input) {
    let a = parseFloat(input[0]);
    let h = parseFloat(input[1]);
    let area = a * h / 2;
    console.log(area.toFixed(2));
}
//Triangle area 8

function convertCelsiumToFarenheit(input) {
    let celSium = parseFloat(input[0]);
    let farenHeit = parseFloat(input[1]);
    farenHeit = celSium * 1.8 + 32;
    console.log(farenHeit);
}
// Convert celsium to farenheit 9

function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;
    console.log(degrees.toFixed(0));
}
//Radians to degrees 10

function conventor(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);
}
// from usd to bgn 11

function currencyConverter([arg1, arg2, arg3]) {
    let monetaryValue = Number(arg1);
    let inputCurrency = arg2;
    let outputCurrency = arg3;
    switch (inputCurrency) {
        case "USD": monetaryValue *= 1.79549; break;
        case "EUR": monetaryValue *= 1.95583; break;
        case "GBP": monetaryValue *= 2.53405; break;
    }
    switch (outputCurrency) {
        case "USD": monetaryValue /= 1.79549; break;
        case "EUR": monetaryValue /= 1.95583; break;
        case "GBP": monetaryValue /= 2.53405; break;
    }
    console.log(`${monetaryValue.toFixed(2)} ${outputCurrency}`);
}
//Currency converter 12 with attetion!

function calculateDates([arg1]){
    let input = arg1;
    let inputArray = input.split('-');
    let dd = inputArray[0];
    let mm = inputArray[1];
    let yyyy = inputArray[2];
    
    let inputFormat = yyyy + "," + mm + "," + dd;
    
    let inputDate = new Date(inputFormat);
    
    let newDate = new Date(inputDate.setDate(inputDate.getDate() + 1000)); 
    dd = newDate.getDate();
    if(dd < 10){
        dd = "0" + dd;
    }
    mm = newDate.getMonth() + 1;
    if(mm < 10){
        mm = "0" + mm;
    }
    console.log(dd + "-" + mm + "-" + newDate.getFullYear());
}
// 1000 days after birth with attetion! 13

