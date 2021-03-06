function stopString(input) {
    let index = 0;
    while (true) {
        let str = input[index]; //walking the massive with index
        index++;
        if (str == "Stop") {
            break;
        }
        console.log(str);
    }
}
// 1 lab
function password(input) {
    let username = input[0];
    let password = input[1];
    let data = input[2];
    let index = 3;
    while (data !== password) {
        data = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}
//2 lab
function sumNumbers(input) {
    let n = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (sum < n) {
        let currentNum = Number(input[index]);
        sum += currentNum;
        index++;
    }
    console.log(sum);
}
// 3 lab
function sequence(input) {
    let number = Number(input[0]);
    let k = 1;
    while (k <= number) {
        console.log(k);
        k = k * 2 + 1;
    }
}
// 4 lab
function accountBalance(input) {
    let deposit = input[0];
    let balance = 0;
    let index = 1;
    while (deposit !== "NoMoreMoney") {
        let amount = Number(deposit);
        if (amount < 0) {
            console.log("invalid operation!");
            break;
        }
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        deposit = input[index];
        index++;
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}
// 5 lab
function maxNumber(input) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let index = 0;

    while (input[index] != 'Stop') {
        if (Number(input[index] > maxNum)) {
            maxNum = Number(input[index]); // parsed index massive
        }
        index++;
    }

    console.log(maxNum);
}
// 6 lab massives are inside the 
function minNumber(input) {
    let minNum = Number.MAX_SAFE_INTEGER;
    let index = 0;

    while (input[index] != 'Stop') {
        if (Number(input[index] < minNum)) {
            minNum = Number(input[index]);
        }
        index++;
    }

    console.log(minNum);
}
// 7 lab same for min number
function graduation(input) {
    let name = input[0];
    let index = 1;
    let sum = 0;

    while (index < input.length) {
        if (Number(input[index]) >= 4) {
            sum += Number(input[index]);
        } else {
            console.log(`${name} has been excluded at ${index} grade`);
            break; // contunie...
        }
        index++;
    }

    if (index == 13) {
        let mark = sum / 12;
        console.log(`${name} graduated. Average grade: ${mark.toFixed(2)}`);
    }
}
// 8 lab !!
function moving(input) {
    let weight = input[0];
    let length = input[1];
    let height = input[2];
    let index = 3;
    let complete = true;

    let flatSize = weight * length * height;
    while (input[index] != 'Done') {
        if (flatSize - Number(input[index]) >= 0) {
            flatSize -= Number(input[index]); //parsed index
        } else {
            let spaceNeeded = Math.abs(flatSize - Number(input[index]));
            complete = false;
            console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
            break;
        }
        index++;
    }
    if (complete) {
        console.log(`${flatSize} Cubic meters left.`);
    }
}
// 9 lab 
//1-9 lab