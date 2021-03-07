function oldBooks(input) {
    let favBook = input[0];
    let index = 1;
    let bookIsFound = false;

    let nextBookName = input[index];
    while (nextBookName !== "No More Books") {
        if (nextBookName === favBook) {
            bookIsFound = true;
            break;
        }
        index++;
        nextBookName = input[index];
    }
    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index-1} books.`);
    } else {
        console.log(`You checked ${index-1} books and found it.`);

    }
}
//1 exercise
function examPreparation(input) {
    let badExams = Number(input[0]);
    let index = 1;
    let sumGoodExams = 0;
    let badExamStop = false;
    let countBadMarks = 0;
    let countGoodMarks = 0;
    let lastExamName = '';

    while (input[index] != 'Enough') {
        lastExamName = input[index++];
        if (Number(input[index]) > 4) {
            sumGoodExams += Number(input[index++]);
            countGoodMarks++;
        } else {
            sumGoodExams += Number(input[index++]);
            countBadMarks++;
            badExams--;
            if (badExams == 0) {
                badExamStop = true;
                break;
            }
        }
    }

    if (badExamStop) {
        console.log(`You need a break, ${countBadMarks} poor grades.`);
    } else {
        let averageMark = sumGoodExams / (countBadMarks + countGoodMarks);
        let allMarks = countGoodMarks + countBadMarks;
        console.log(`Average score: ${averageMark.toFixed(2)}`);
        console.log(`Number of problems: ${allMarks}`);
        console.log(`Last problem: ${lastExamName}`);
    }
}
//2 exercise
function vacantion(input) {
    let moneyNeeded = Number(input[0]);
    let moneySaved = Number(input[1]);
    let index = 2;
    let spend = 0;
    let allDays = 0;

    while (index < input.length) {
        allDays++; //1 day
        if (input[index++] == 'save') {
            moneySaved += Number(input[index++]);
            spend = 0;
        } else {
            moneySaved -= Number(input[index++]);
            spend++;
            if (moneySaved < 0) {
                moneySaved = 0;
            }

            if (spend == 5) {
                console.log(`You can't save the money.`);
                console.log(`${allDays}`);
            }
        }
    }

    if (moneySaved >= moneyNeeded) {
        console.log(`You saved the money for ${allDays} days.`);
    }
}
// 3 exercise
function walking(input) {
    let goal = 10000;
    let index = 0;
    let steps = 0;

    while (index < input.length) {
        if (input[index] == 'Going home') {
            index++;
            continue;
        } else {
            steps += Number(input[index++]);
        }

        if (steps >= goal) {
            break;
        }
    }

    if (steps < goal) {
        let difference = goal - steps;
        console.log(`${difference} more steps to reach goal.`);
    } else {
        let difference = steps - goal;
        console.log(`Goal reached! Good job!`);
        console.log(`${difference} steps over the goal!`);
    }
}
// 4 exercise
function coins(number) {
    number = Math.round(Number(number) * 100);
    let allCoins = 0;

    while (number != 0) {
        if (number >= 200) {
            number -= 200;
            allCoins++;
        } else if (number >= 100) {
            number -= 100;
            allCoins++;
        } else if (number >= 50) {
            number -= 50;
            allCoins++;
        } else if (number >= 20) {
            number -= 20;
            allCoins++;
        } else if (number >= 10) {
            number -= 10;
            allCoins++;
        } else if (number >= 5) {
            number -= 5;
            allCoins++;
        } else if (number >= 2) {
            number -= 2;
            allCoins++;
        } else if (number == 1) {
            number -= 1;
            allCoins++;
        }
    }
    console.log(allCoins);
}
//5 exercise with attetion!!
function cake(input) {
    let width = input[0];
    let length = input[1];
    let index = 2;
    let size = width * length;

    while (index < input.length) {
        if (input[index] == 'STOP') {
            break;
        }
        size -= Number(input[index++]);

        if (size < 0) {
            break;
        }
    }

    if (size >= 0) {
        console.log(`${size} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(size)} pieces more.`);
    }
}
// 6 exercise with attection!