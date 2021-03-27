function isExcellent(input) {
    const  grade = parseFloat(input[0]);
    if(grade >= 5.50){
        console.log('Excellent!');
    }
}

//1 lects

function color(color) {
    if(color =="red"){
        console.log("tomato");
    }else{
       console.log("bye");
    }
}

//2 lects

function greaterNum(numArr) {
    let firstNum = Number(numArr[0]);
    let secondNum = Number(numArr[1]);

    if(firstNum >= secondNum){
        console.log(firstNum);
    } else{
        console.log(secondNum);
    }
}

//3 lects

function oddOrEven(input) {
    num = Number(input[0]);
    if(num % 2 == 0){
        console.log("Odd");
    } else{
        console.log("Even");
    }
}
//4 lects 
function isElse(num) {
    if(num > 5){
        console.log("Bigger than 5");
    } else if(num > 3){
        console.log("Bigger than 3");
    } else{
        console.log("Lower or equal to 3");
    }
}

//5 lects

function scopeTest(){
    let a = 5;
    if(a == 5){
        let b = "bigger than";
        console.log(b);
    }
    let b = 10;
    console.log(b);
}
//scope test 6 


function greaterNumber(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    if (num1 > num2){
        console.log(num1);
    } else{
        console.log(num2);
    }
}
//2 lab 

function oddOrEven(input) {
    num = Number(input[0]);
    if(num % 2 == 0){
        console.log("even");
    } else{
        console.log("odd");
    }
}
//3 lab 

function from100To200(input) {
    num = Number(input[0]);
    if(num > 200){
        console.log("Greater than 200");
    } else if(num >= 100){
        console.log("Between 100 and 200");
    } else{
        console.log("Less than 100");
    }
}
//4 lab 

function guessPassword(input) {
  let  password = input[0];
    if(password == "s3cr3!P@assw0rd") {
        console.log("Welcome");
    } else{
        console.log("Wrong password!");
    }
}
// 5 lab

function calcArea(args) {
    let result;
    if (args[0] == "square") {
        let side = Number(args[1]);
        result = Math.pow(side, 2);
    } else if (args[0] == "rectangle") {
        let a = Number(args[1]);
        let b = Number(args[2]);
        result = a * b;
    } else if (args[0] == "circle") {
        let r = Number(args[1]);
        result = Math.PI * Math.pow(r,2);
    } else if (args[0] == "triangle") {
        let side = Number(args[1]);
        let h = Number(args[2]);
        result = (side * h) / 2;
    }
    console.log(result.toFixed(3));
}
// 6 lab 

function toyShop(args) {
    let tripPrice = parseFloat(args[0]);
    let puzzle = Number(args[1]);
    let dolls = Number(args[2]);
    let teddyBears = Number(args[3]);
    let minions = Number(args[4]);
    let trucks = Number(args[5]);

    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let toysCount = puzzle + dolls + teddyBears + minions + trucks;
    
    let totalSum = puzzle * puzzlePrice + 
    dolls * dollPrice + teddyBears * bearPrice + minions * minionPrice + trucks * truckPrice;
    
    if(toysCount >= 50){
        totalSum = totalSum - (totalSum * 0.25);
    } 
    totalSum = totalSum - (totalSum * 0.10);

    if(totalSum >= tripPrice){
        console.log(`Yes! ${(totalSum - tripPrice).toFixed(2)} lv left.`);

    } else{
        console.log(`Not enough money! ${(tripPrice - totalSum).toFixed(2)} lv needed.`);
    }
}
// 7 lab 
//1-7 lab
function sumSeconds(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let result = a + b + c;
    let timeInMin = Math.floor(result / 60);
    let timeInSec = result % 60;

    if(timeInSec < 10){
        console.log(`${timeInMin}:0${timeInSec}`);
    } else{
        console.log(`${timeInMin}:${timeInSec}`);
    }

}

// 1 exercise

function bonusScore(input) {
    let num = Number(input[0]);
    let bonus = 0;
    if(num <= 100){
        bonus = 5;
    } else if(num > 1000){
        bonus = num * 0.10;
    } else{
        bonus = num * 0.20;
    }
    
    if(num % 2 == 0){
        bonus = bonus + 1;
    } else if(num % 10 == 5){
         bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(bonus + num);
}

//2 exersice

function speedInfo(input) {
    let speed = parseFloat(input[0]);

    if(speed <= 10){
        console.log("slow");
    } else if(speed <= 50){
        console.log("average");
    } else if(speed <= 150){
        console.log("fast");
    } else if(speed <= 1000){
        console.log("ultra fast");
    } else{
        console.log("extremely fast");
    }
}
//3 exersice

function metricConventor(input) {
    let num = Number(input[0]);
    let firstUnit = input[1];
    let secondUnit = input[2];
    let result;
  
    if ((firstUnit == "mm", secondUnit == "m")) {
      result = num / 1000;
      console.log(result.toFixed(3));
    } else if ((firstUnit == "m"&& secondUnit == "mm")) {
      result = num * 10;
      console.log(result.toFixed(3));
    } else if ((firstUnit == "cm"&& secondUnit == "m")) {
      result = num / 100;
      console.log(result.toFixed(3));
    } else if ((firstUnit == "m"&& secondUnit == "cm")) {
      result = num * 100;
      console.log(result.toFixed(3));
    } else if ((firstUnit == "mm"&& secondUnit == "cm")) {
      result = num / 10;
      console.log(result.toFixed(3));
    } else if ((firstUnit == "cm" && secondUnit == "mm")) {
      result = num * 10;
      console.log(result.toFixed(3));
    }
  }
//4 exercise

function time(input) {
    let h = Number(input[0]);
    let m = Number(input[1]);

    let totalMin = h * 60 + m;
    let totalMinAfter = totalMin + 15;
    let finalH = Math.floor(totalMinAfter / 60);

    if(finalH > 23){
        finalH = 0;

    }

    let finalMin = totalMinAfter % 60;
    if(finalMin < 10){
        console.log(`${finalH}:0${finalMin}`);
    } else{
        console.log(`${finalH}:${finalMin}`);
    }

}
//5 exersice

function gotzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let extrasClothesPrice = Number(input[2]);

    if (extrasCount > 150) {
        extrasClothesPrice -= extrasClothesPrice * 10;
    }

    let decorValue = movieBudget * 10;
    movieBudget = movieBudget - (extrasCount * extrasClothesPrice + decorValue);

    if (movieBudget > 0) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${movieBudget.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${Math.abs(movieBudget).toFixed(2)} leva more.`);
    }
}
//6 exercise

function score(input) {
 
    let recordsSec = Number(input[0]);
    let distanceM = Number(input[1]);
    let timeSec1m = Number(input[2]);
 
    let timeIvan = distanceM * timeSec1m;
    let ping = Math.floor(distanceM / 15);
    let relaTimeIvan = timeIvan + (12.5 * ping);
 
     if (relaTimeIvan < recordsSec){
         console.log(`Yes, he succeeded! The new world record is ${(relaTimeIvan).toFixed(2)} seconds.`);
     }else{
         let neddedTime = Math.abs(recordsSec - relaTimeIvan);
         console.log(`No, he failed! He was ${(neddedTime).toFixed(2)} seconds slower.`);
    }
}
// 7 exersice

function scholarship(input){
    let income = Number(input[0]);
    let grade = Number(input[1]);
    let minIncome = Number(input[2]);
    let socSch = minIncome * 35;
    let exhSch = grade * 25;
    if (grade < 5.5){
        exhSch = 0;
    }
    if (income >= minIncome){
        socSch = 0;
    }
    if (grade < 4.5){
        console.log("You cannot get a scholarship!");
    } else if (socSch + exhSch == 0){
        console.log("You cannot get a scholarship!");
    } else if (exhSch >= socSch){
        console.log(`You get a scholarship for excellent results ${Math.floor(exhSch)} BGN`);
    } else {
        console.log(`You get a Social scholarship ${Math.floor(socSch)} BGN`);
    }    
}
//8 exersice

//1-8 exersice
 

