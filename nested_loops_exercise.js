function pyramid([number]) {
    number = Number(number);
    let current = 1;
    let printCurrent = '';

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            if (current > number) {
                break;
            }
            printCurrent += current + ' ';
            current++;
        }
        console.log(printCurrent);
        printCurrent = '';
        if (current > number) {
            break;
        }
    }
}
// 1 exercise
function sumNum(input) {
    startNumber = Number(input[0]);
    finalNumber = Number(input[1]);
    correctNumber = '';
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = startNumber; i <= finalNumber; i++) {
        let num = String(i);
        for (let j = 0; j < num.length; j++) {

            if (j % 2 == 0) {
                sumEven += Number(num[j]);
            } else {
                sumOdd += Number(num[j]);
            }
        }

        if (sumEven == sumOdd) {
            correctNumber += ' ' + i;
        }

        sumEven = 0;
        sumOdd = 0;
    }

    console.log(correctNumber);
}
// 2 exercise
function sumPrimeNonPrime(input) {
    let number = input.shift();
    let sumPrime = 0;
    let sumNonPrime = 0;
    let flag = true;

    while (number != 'stop') {
        number = Number(number);
        if (number < 0) {
            console.log('Number is negative.');
            number = input.shift();
            continue;
        }
        for (i = 2; i < number; i++) {
            if (number % i == 0) {
                sumNonPrime += number;
                flag = false;
                break;
            }
        }
        if (flag) {
            sumPrime += number;
        }
        number = input.shift();
        flag = true;
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
//3 exercise
function TrainTheTrainers(input) {
    let markNumbers = input.shift(); //another method
    let examName = input.shift();
    let allMarks = 0;
    let sumAllMarks = 0;
    let examCount = 0;

    while (examName != 'Finish') {
        for (let index = 0; index < markNumbers; index++) {
            mark = input.shift();
            sumAllMarks += Number(mark);

        }
        let finalMark = sumAllMarks / markNumbers;
        console.log(`${examName} - ${finalMark.toFixed(2)}.`);
        sumAllMarks = 0;
        allMarks += Number(finalMark);
        examCount++;
        examName = input.shift();

    }
    totalMark = allMarks / examCount;
    console.log(`Student's final assessment is ${totalMark.toFixed(2)}.`);
}
//4 exercise
function specialNumbers(number) {
    number = Number(number);
    let flag = true;
    let specNumbers = '';

    for (let index = 1111; index < 10000; index++) {
        const element = String(index);
        for (let char = 0; char < element.length; char++) {
            const digit = Number(element[char]);

            if (number % digit != 0) {
                flag = false;
                break;
            }
        }

        if (flag) {
            specNumbers += element + ' ';
        }
        flag = true;
    }

    console.log(specNumbers);
}
//5 exercise with attetion!
//1-5 exercise