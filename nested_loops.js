function clock() {
    for (let h = 0; h <= 23; h++) {
        for (let m = 0; m <= 59; m++) {
            console.log(`${h}:${m}`);
        }
    }
}
// 1 lab
function table() {
    for (i = 1; i < 11; i++) {
        for (j = 1; j < 11; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}
// 2 lab
function combination([number]) {
    number = Number(number);
    let index = 0;

    for (i = 0; i <= number; i++) {
        for (j = 0; j <= number; j++) {
            for (x = 0; x <= number; x++) {
                if (i + j + x == number) {
                    index++;
                }
            }

        }
    }
    console.log(index);
}
// 3 lab
function sumNum(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combination = 0;
    let find = false;

    for (i = start; i <= end; i++) {
        for (j = start; j <= end; j++) {
            combination++;
            if (i + j == magicNumber) {
                console.log(`Combination N:${combination} (${i} + ${j} = ${i + j})`);
                find = true;
                break;
            }
        }
        if (find) {
            break;
        }
    }
    if (!find) {
        console.log(`${combination} combinations - neither equals ${magicNumber}`);
    }
}
// 4 lab
function traveling(input) {
    let destination = input[0];
    let moneyNeeded = Number(input[1]);
    let currentMoney = 0;
    let index = 2;

    while (destination != 'End') {
        while (currentMoney < moneyNeeded) {
            currentMoney += Number(input[index++]);
        }
        console.log(`Going to ${destination}!`);
        if (input[index] == 'End') {
            break;
        }
        destination = input[index++];
        moneyNeeded = input[index++];
        currentMoney = 0;
    }
}
// 5 lab
function building(input) {
    let floor = Number(input[0]);
    let rooms = Number(input[1]);
    let type = '';
    let result = '';

    for (i = floor; i > 0; i--) {
        for (j = 0; j < rooms; j++) {
            if (i % 2 == 0) {
                if (i == floor) {
                    type = 'L';
                } else {
                    type = 'O';
                }

            } else {
                if (i == floor) {
                    type = 'L';
                } else {
                    type = 'A';
                }
            }
            result += ' ' + type + i + j;
        }
        console.log(`${result}`);
        result = '';
    }
}
// 6 lab
function cinemaTicket(input) {
    let movie = input.shift();
    let freeSeats = Number(input.shift());
    let standard = 0;
    let kid = 0;
    let student = 0;
    let capacity = 0;

    while (movie != 'Finish') {
        let ticket = input.shift();
        while (ticket != 'End') {
            if (ticket == 'Finish') {
                break;
            }
            capacity++;
            if (ticket == 'standard') {
                standard++;

            } else if (ticket == 'kid') {
                kid++;

            } else {
                student++;

            }
            if (capacity == freeSeats) {
                break;
            }
            ticket = input.shift();
        }
        let percent = (capacity / freeSeats) * 100;
        console.log(`${movie} - ${percent.toFixed(2)}% full.`);
        if (ticket == 'Finish') {
            break;
        }
        movie = input.shift();
        freeSeats = input.shift();
        capacity = 0;
    }
    let allTicketsCount = student + kid + standard;
    console.log(`Total tickets: ${allTicketsCount}`);
    let percentStudentTickets = student / allTicketsCount * 100;
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
    let percentStandardTickets = standard / allTicketsCount * 100;
    console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
    let percentKidTickets = kid / allTicketsCount * 100;
    console.log(`${percentKidTickets.toFixed(2)}% kids tickets.`);
}
// 7 lab  with attention!
function tournamentOfChristmas(input) {
    let dayOfTournament = input.shift();

    let win = 0;
    let lose = 0;
    let profit = 0;
    let dailyProfit = 0;
    let winner = 0;
    let loser = 0;

    for (i = 0; i < dayOfTournament; i++) {
        let game = input.shift();

        while (game != 'Finish') {

            let winOrLose = input.shift();
            if (winOrLose == 'win') {
                win++;
            } else {
                lose++;
            }
            game = input.shift();
        }
        if (win > lose) {
            winner++;
            dailyProfit = (win * 20) * 1.10;
            profit += dailyProfit;
        } else {
            loser++;
            dailyProfit = win * 20;
            profit += dailyProfit;
        }
        lose = 0;
        win = 0;

    }
    if (winner > loser) {
        profit *= 1.20;
        console.log(`You won the tournament! Total raised money: ${profit.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${profit.toFixed(2)}`);
    }
}
// 8 lab with attention!