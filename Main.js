function sayHello() {
    console.log("Hello SoftUni");
}
solve();
function numsFrom1to10() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
 }

 function squareArea(input) {
    let a = Number(input[0]);
    let area = a * a;
    console.log(area);
}

function convertInchesToCentimeters(input) {
    let inches = input[0];
    let centimeters = inches * 2.54;
    console.log('Centimeters = '+ centimeters);
}

function greetings(input) {
    let name = input[0];
    console.log(`Hello, ${name}!`); 
}

function solve(input) {
    console.log(
      `You are ${input[0]} ${input[1]}, a ${input[2]}-years old person from ${input[3]}.`
    );
}

function firstArch(input) {
    let name = input[0];
    let countProjects = Number(input[1]);
    let projectTime = countProjects * 3;
    console.log(`The architect ${input[0]} will need ${projectTime} hours to complete ${input[1]} project/s.`);
}


function petShop (input) {
    let dogCount = Number (input[0]);
    let otherAnimals = Number (input[1]);
    let dogFoodPrice = 2.5;
    let otherAnimalFood = 4;
    
    let dogTotal = dogCount * dogFoodPrice;
    let otherPrice = otherAnimals * otherAnimalFood;
    
    let result = dogTotal + otherPrice;

    console.log(result);
}

function yardGreening(sqm) {
    
    let price = (sqm * 7.61) - (sqm * 7.61) * 0.18;
    let discount = (sqm * 7.61) * 0.18;
    console.log(`The final price is: ${price} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

//1-9  lab //

function conventor(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);
}
//1 
function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;
    console.log(degrees.toFixed(0));
}
//2
function calculateDeposit(input) {
    let depositSum = parseFloat(input[0]);
    let depositDeadline = Number(input[1]);
    let annualPercent = parseFloat(input[2]);
    sum = depositSum + depositDeadline * ((depositSum * annualPercent/100)/12);
    let result = sum;
    console.log(result);
}
//3
function vacationBookList(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    
    let totalTime = pages / pagesPerHour;
    let result = totalTime / days;
    console.log(result);

}
//4
function birthdayParty(input) {
    let rentRoom = Number(input[0]);
    let cake = rentRoom * 0.20;
    let drinks = cake * 0.55;
    let animator = rentRoom / 3;
    let totalSum = rentRoom + cake + drinks + animator;
    console.log(totalSum);
}
//5
function charityCampaign(input) {
    let dayCount = Number(input[0]);
    let confectionerCount = Number(input[1]);
    let cakeCount = Number(input[2]);
    let wafflesCount = Number(input[3]);
    let pancakesCount = Number(input[4]);

    let totalCakes = confectionerCount * cakeCount;
    let totalWaffles = confectionerCount * wafflesCount;
    let totalPancakes = confectionerCount * pancakesCount;

    let totalCakesMoney = totalCakes * 45;
    let totalWafflesMoney = totalWaffles * 5.8;
    let totalPancakesMoney = totalPancakes * 3.2;

    let totalMoney = (totalCakesMoney + totalWafflesMoney + totalPancakesMoney)* dayCount;

    totalMoney = totalMoney - (totalMoney / 8);
    console.log(totalMoney);
}
//6

function fruitMarket(input) {
    let strawberryPrice = parseFloat(input[0]);
    let rasberryPrice = strawberryPrice / 2;
    let orangePrice =  rasberryPrice - (rasberryPrice * 0.4);
    let bananaPrice =  rasberryPrice - (rasberryPrice * 0.8);

    let bananaQuantityKg  = parseFloat(input[1]);
    let orangeQuantityKg = parseFloat(input[2]);
    let rasberryQuantityKg = parseFloat(input[3]);
    let strawberryQuantityKg = parseFloat(input[4]);
    
    let sumBananas = bananaQuantityKg * bananaPrice;
    let sumOrange = orangeQuantityKg  * orangePrice;
    let sumRasberry = rasberryQuantityKg * rasberryPrice;
    let sumStrawberry = strawberryQuantityKg * strawberryPrice;

    let totalSum = sumRasberry + sumOrange + sumBananas + sumStrawberry;
    console.log(totalSum);    
}
//7 

function litresWaterNeeded(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);


    let volumeAquarium = length * width * heigth;
    let totalLitres = volumeAquarium * 0.001;
    let percent = Number(input[3]) * 0.01;
    let pureLitres = totalLitres * (1 - percent);

    console.log(pureLitres);
}
//8

//1-8 exercize // 





