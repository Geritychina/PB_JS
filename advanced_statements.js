function dayOfWeeks(input) {
    let number = Number(input[0]);
    switch (number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break;
    }
}
//1 lab

function weekendOrWorkingDay(input) {
    let day = input[0];
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }
}
//2 lab
function animalType(input) {
    let animal = input[0];
    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}
//3 lab
function personalTitles([arg1, arg2]) {
    let age = Number(arg1);
    let gender = arg2;
    if (gender == "f") {
        if (age < 16) console.log("Miss");
        else console.log("Ms.");
    } else if (gender == "m") {
        if (age < 16) console.log("Master");
        else console.log("Mr.");
    }
}
//4 lab

function smallShop(input) {
    let product = input.shift(); //input[0]
    let city = input.shift();
    let quantity = Number(input.shift()); //Number(input[0])

    let totalPrice = 0;
    if (city === "Sofia") {
        switch (product) {
            case 'coffee':
                totalPrice = 0.50 * quantity;
                break;
            case 'water':
                totalPrice = 0.80 * quantity;
                break;
            case 'beer':
                totalPrice = 1.20 * quantity;
                break;
            case 'sweets':
                totalPrice = 1.45 * quantity;
                break;
            case 'peanuts':
                totalPrice = 1.60 * quantity;
                break;
        }
    } else if (city === "Plovdiv") {
        switch (product) {
            case 'coffee':
                totalPrice = 0.40 * quantity;
                break;
            case 'water':
                totalPrice = 0.70 * quantity;
                break;
            case 'beer':
                totalPrice = 1.15 * quantity;
                break;
            case 'sweets':
                totalPrice = 1.30 * quantity;
                break;
            case 'peanuts':
                totalPrice = 1.50 * quantity;
                break;
        }
    } else {
        switch (product) {
            case 'coffee':
                totalPrice = 0.45 * quantity;
                break;
            case 'water':
                totalPrice = 0.70 * quantity;
                break;
            case 'beer':
                totalPrice = 1.10 * quantity;
                break;
            case 'sweets':
                totalPrice = 1.35 * quantity;
                break;
            case 'peanuts':
                totalPrice = 1.55 * quantity;
                break;
        }
    }

    console.log(totalPrice);
}
// 5 lab
function numberInRange(arg) {
    let num = Number(arg[0]);
    if (num >= -100 && num <= 100 && num !== 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
} // 6 lab

function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];
    if (hour >= 10 || hour <= 18) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log('open');
                break;
            case "Sunday":
            default:
                console.log('closed');
                break;
        }
    } else {
        console.log('closed');
    }

} // 7 lab

function ticketPrice(input) {
    let dayOfWeeks = input[0];
    if (dayOfWeeks == "Monday" || dayOfWeeks == "Tuesday" || dayOfWeeks == "Friday") {
        console.log(12);
    } else if (dayOfWeeks == "Wednesday" || dayOfWeeks == "Thursday") {
        console.log(14);
    } else if (dayOfWeeks == "Saturday" || dayOfWeeks == "Sunday") {
        console.log(16);
    }
} // 8 lab

function fruitOrVegetable(input) {
    let product = input[0];
    switch (product) {
        case "banana":
        case "apple":
        case "cherry":
        case "kiwi":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");

    }
}
//9 lab

function solve(input) {
    let n = Number(input[0]);
    let isValid = n >= 100 && n <= 200 || n == 0;
    if (!isValid) {
        console.log("invalid");
    }
}
//10 lab
function fruitShop(input) {
    let fruit = input[0].toLowerCase();
    let day = input[1].toLowerCase();
    let quantity = Number(input[2]);
    let price = 0;
    if (day == "saturday" || day == "sunday") {
        if (fruit == "banana") price = 2.70;
        else if (fruit == "apple") price = 1.25;
        else if (fruit == "orange") price = 0.90;
        else if (fruit == "grapefruit") price = 1.60;
        else if (fruit == "kiwi") price = 3.00;
        else if (fruit == "pineapple") price = 5.60;
        else if (fruit == "grapes") price = 4.20;
    } else if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") {
        if (fruit == "banana") price = 2.50;
        else if (fruit == "apple") price = 1.20;
        else if (fruit == "orange") price = 0.85;
        else if (fruit == "grapefruit") price = 1.45;
        else if (fruit == "kiwi") price = 2.70;
        else if (fruit == "pineapple") price = 5.50;
        else if (fruit == "grapes") price = 3.85;
    }
    if (price >= 0) {
        console.log((price * quantity).toFixed(2));
    } else {
        console.log("error");
    }
}
//11 lab 

function commision(argArr) {
    let city = argArr[0];
    let sales = Number(argArr[1]);
    let calculatedCommision = 0;
    let isError = false;

    if (sales <= 0) {
        console.log("error");
    } else {
        switch (city) {
            case "Sofia":
                if (sales <= 500) {
                    calculatedCommision = sales * 0.05;
                } else if (sales <= 1000) {
                    calculatedCommision = sales * 0.07;
                } else if (sales <= 10000) {
                    calculatedCommision = sales * 0.08;
                } else {
                    calculatedCommision = sales * 0.12;
                }
                break;
            case "Varna":
                if (sales <= 500) {
                    calculatedCommision = sales * 0.045;
                } else if (sales <= 1000) {
                    calculatedCommision = sales * 0.075;
                } else if (sales <= 10000) {
                    calculatedCommision = sales * 0.1;
                } else {
                    calculatedCommision = sales * 0.13;
                }
                break;
            case "Plovdiv":
                if (sales <= 500) {
                    calculatedCommision = sales * 0.055;
                } else if (sales <= 1000) {
                    calculatedCommision = sales * 0.08;
                } else if (sales <= 10000) {
                    calculatedCommision = sales * 0.12;
                } else {
                    calculatedCommision = sales * 0.145;
                }
                break;
            default:
                isError = true;
                break;

        }
        if (isError) {
            console.log("error");
        } else {
            console.log(calculatedCommision.toFixed(2));
        }
    }
} //12 lab

function skiTrip(input) {
    let days = Number(input.shift()); //Number(input[0])
    let place = (input.shift()).toLowerCase(); //input
    let rate = (input.shift()).toLowerCase();
    let nights = days - 1;
    let discount = 0;
    let priceWithDiscount = 0;
    let totalPrice = 0;
    if (place == `room for one person`) {
        priceWithDiscount = nights * 18;
    } else if (place == `apartment`) {
        if (days > 1 && days < 10) {
            discount = 0.30;
            priceWithDiscount = nights * 25 * (1 - discount);
        } else if (days >= 10 && days <= 15) {
            discount = 0.35;
            priceWithDiscount = nights * 25 * (1 - discount);
        } else if (days > 15) {
            doscount = 0.50;
            priceWithDiscount = nights * 25 * (1 - discount);
        }
    } else if (place == `president apartment`) {
        if (days > 1 && days < 10) {
            discount = 0.10;
            priceWithDiscount = nights * 35 * (1 - discount);
        } else if (days >= 10 && days <= 15) {
            discount = 0.15;
            priceWithDiscount = nights * 35 * (1 - discount);
        } else if (days > 15) {
            discount = 0.20;
            priceWithDiscount = nights * 35 * (1 - discount);
        }
    }
    if (rate == `positive`) {
        totalPrice = priceWithDiscount * (1 + 0.25);
    } else if (rate == `negative`) {
        totalPrice = priceWithDiscount * (1 - 0.10);
    }
    console.log(totalPrice.toFixed(2));
}
//13 lab

//1-13 lab