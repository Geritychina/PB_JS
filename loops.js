function numbers1To100() {
  for(let i = 1; i<= 100; i++){
    console.log(i);
  }
}
// 1 lab
function solve(input) {
  let n = Number(input[0]);
  for(let i = n; i >= 1; i--){
    console.log(i);
  }
}
//2 lab

function biggerStep(input) {
  let num = Number(input[0]);
  for(let i = 1; i <= num; i+=3){
    console.log(i);
  }
}
// 3 lab

function solve(input) {
  let n = Number(input[0]);
  let num = 1;
  for(let i = 0; i <=num; i+=2){
    console.log(num);
    num = num * 2 * 2;
  }
}
// 4 lab

function solve(input) {
  let text = input[0];
  for(let i = 0; i < text.length; i++){
    console.log(text[i]);
  }
}
//5 lab
function Vowels_Sum([text]) {
    let sum = 0;

    for (let i = 0; i < text.lenght; i++) {
        let letter = text[i];
        switch (letter) {
            case 'a': sum += 1;break;
            case 'e': sum += 2;break;
            case 'i': sum += 3;break;
            case 'o': sum += 4;break;
            case 'u': sum += 5;break;
        }
    }
    console.log(sum);
}
// 6 lab
function sum(input){
  let number = input[0];
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
	sum += Number(number[i]);
  }

  console.log(`The sum of the digits is:${sum}`);
}

// 7 lab

function divisibleByNine([num1, num2]) {
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = 0;
    let allNumbers = '';

    for (let i = num1; i < num2; i++) {
        if(i % 9 == 0){
            sum += i;
            allNumbers += i + '\n';
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(allNumbers);
    
}
//8 lab

function cleverLilly(argArr) {
    let age = Number(argArr[0]);
    let washerPrice = Number(argArr[1]);
    let toyPrice = Number(argArr[2]);

    let toyCount = 0;
    let moneyAmount = 0;
    let currentMoneyPresent = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            currentMoneyPresent += 10;
            moneyAmount = moneyAmount + currentMoneyPresent;
            moneyAmount--;
        } else {
            toyCount++;
        }
    }

    moneyAmount += toyCount* toyPrice;

    if (moneyAmount >= washerPrice) {
        console.log(`Yes! ${(moneyAmount-washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerPrice - moneyAmount).toFixed(2)}`);
    }
}
//9 lab
