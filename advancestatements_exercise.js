function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;
    if (type == "Premiere") {
        income = rows * columns * 12.0;
    } else if (type == "Normal") {
        income = rows * columns * 7.50;
    } else if (type == "Discount") {
        income = rows * columns * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`);
}
//1 exercise

function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let outfit;
    let shoes;
    switch (timeOfDay) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (degrees >= 18 && degrees < 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees >= 25) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            break;
        case "Afternoon":
            if (degrees >= 18 && degrees <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (degrees >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
            break;
        case "Evening":
            outfit = "Shirt";
            shoes = "Moccasins";
            break;

    }

    console.log(`It's ${degrees}, get your ${outfit} and ${shoes}.`);

}
// 2 exercise
function newHouse(input) {
    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let money = 0;

    switch (type) {
        case "Roses":
            money = count * 5;
            if (count > 80) {
                money = money * 0.9;
            }
            break;
        case "Dahlias":
            money = count * 3.8;
            if (count > 90) {
                money = money * 0.85;
            }
            break;
        case "Tilups":
            money = count * 2.80;
            if (count > 80) {
                money = money * 0.85;
            }
            break;
        case "Narcissus":
            money = count * 3;
            if (count < 120) {
                money = money * 1.15;
            }
            break;
        case "Gladiolus":
            money = count * 2.5;
            if (count < 80) {
                money = money * 1.20;
            }
            break;
    }
    if (budget >= money) {
        let diff = budget - money;
        console.log(`Hey, you have a great garden with ${count} ${type} and ${diff.toFixed(2)} leva left.`);
    } else {
        let diff = Math.abs(budget - money);
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
// 3 exercise

function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let count = Number(input[2]);

    let price = 0;
    //Spring, Summer, Autumn, Winter

    if (season == "Spring") {
        price = 3000;
        if (count <= 6) {
            price = price * 0.90;
        } else if (count >= 7 && count <= 11) {
            price = price * 0.85;
        } else {
            price = price * 0.75;
        }

        if (count % 2 === 0) {
            price = price * 0.95;
        }

    } else if (season === "Summer" || season === "Autumn") {
        price = 4200;
        if (count <= 6) {
            price = price * 0.90;
        } else if (count >= 7 && count <= 11) {
            price = price * 0.85;
        } else {
            price = price * 0.75;
        }

        if (count % 2 === 0 && season === "Summer") {
            price = price * 0.95;
        }
    } else {
        price = 2600;
        if (count <= 6) {
            price = price * 0.90;
        } else if (count >= 7 && count <= 11) {
            price = price * 0.85;
        } else {
            price = price * 0.75;
        }
        if (count % 2 === 0) {
            price = price * 0.95;
        }
    }

    if (budget >= price) {
        let diff = budget - price;
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        let diff = Math.abs(budget - price);
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
// 4 exercise

function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let place = "";

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            place = "Camp";
            budget *= 0.3;

        } else if (season == "winter") {
            place = "Hotel";
            budget *= 0.7;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            place = "Camp";
            budget *= 0.4;
        } else if (season == "winter") {
            place = "Hotel";
            budget *= 0.8;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        place = "Hotel";
        budget *= 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budget.toFixed(2)}`);
}
//5 exercise
function operationBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let result = 0;

    switch (operator) {
        case "+":
            result = n1 - n2;
            if (result % 2 == 0) {
                console.log(`${n1} ${operator} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
            }
            break;
        case "-":
            result = n1 - n2;
            if (result % 2 == 0) {
                console.log(`${n1} ${operator} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
            }
            break;
        case "*":
            result = n1 * n2;
            if (result % 2 == 0) {
                console.log(`${n1} ${operator} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
            }
            break;
        case "/":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1 / n2;
                console.log(`${n1} / ${n2} = ${result.toFixed(2)} `);
            }
            break;
        case "%":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1 % n2;
                console.log(`${n1} % ${n2} = ${result}`);
            }
            break;

    }
}
// 6 exercise

function hotel(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let priceS = 0;
    let priceA = 0;

    if (month == "May" || month == "October") {
        priceS = 50;
        priceA = 65;
        if (nights > 7 && nights <= 14) {
            priceS = priceS - priceS * 0.05;
            priceA = priceA;
            console.log(`Apartment: ${(priceA * nights).toFixed(2)} lv.`);
            console.log(`Studio: ${(priceS * nights).toFixed(2)} lv.`);
        } else if (nights > 14) {
            priceS = priceS - priceS * 0.30;
            priceA = priceA - priceA * 0.10;
            console.log(`Apartment: ${(priceA * nights).toFixed(2)} lv.`);
            console.log(`Studio: ${(priceS * nights).toFixed(2)} lv.`);
        }
    } else if (month == "June" || month == "September") {
        priceS = 75.20;
        priceA = 68.70;
        if (nights > 14) {
            priceS = priceS - priceS * 0.20;
            priceA = priceA - priceA * 0.10;
            console.log(`Apartment: ${(priceA * nights).toFixed(2)} lv.`);
            console.log(`Studio: ${(priceS * nights).toFixed(2)} lv.`);
        } else {
            console.log(`Apartment: ${(priceA * nights).toFixed(2)} lv.`);
            console.log(`Studio: ${(priceS * nights).toFixed(2)} lv.`);
        }
    } else if (month == "July" || month == "August") {
        priceS = 76;
        priceA = 77;
        if (nights > 14) {
            priceS = priceS;
            priceA = priceA - priceA * 0.10;
            console.log(`Apartment: ${(priceA * nights).toFixed(2)} lv.`);
            console.log(`Studio: ${(priceS * nights).toFixed(2)} lv.`);
        } else {
            console.log(`Apartment: ${(priceA * nights).toFixed(2)} lv.`);
            console.log(`Studio: ${(priceS * nights).toFixed(2)} lv.`);
        }
    }

}
// 7 exercise

function onTimeForTheExam(input) {
    let hoursExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let hoursArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExamInMin = hoursExam * 60 + minutesExam;
    let timeArriveInMin = hoursArrive * 60 + minArrive;

    if (timeExamInMin < timeArriveInMin) {
        console.log("late");
        let diff = timeArriveInMin - timeExamInMin;
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }

        }
    } else if (timeExamInMin === timeExamInMin || timeExamInMin - timeArriveInMin <= 30) {
        console.log("On time");
        if (timeExamInMin - timeArriveInMin !== 0) {
            let diff = timeExamInMin - timeArriveInMin;
            console.log(`${diff} minutes before the start`);
        }
    } else {
        console.log("Early");
        let diff = timeExamInMin - timeArriveInMin;
        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        } else {
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        }
    }

}
// 8 exercise

function volleyball([arg1, arg2, arg3]) {

    let yearType = arg1;
    let holidays = Number(arg2);
    let weekendsHome = Number(arg3);
    let totalGames = 0;
    let gamesSofia = ((2 / 3) * holidays) + (3 / 4) * (48 - weekendsHome);
    let gamesHome = weekendsHome;

    totalGames = gamesHome + gamesSofia;
    if (yearType === 'leap') {

        totalGames *= 1.15;

    }

    console.log(Math.floor(totalGames));

}
// 9 exercise

//1-9 exercise