function easterLunch(input) {
    let countKozun = Number(input[0]);
    let countEgg = Number(input[1]);
    let cookieKg = Number(input[2]);

    let pricePaintEgg = countEgg * 12 * 0.15;
    let kozunPrice = countKozun * 3.20;
    let eggPrice = countEgg * 4.35;
    let cookiePrice = cookieKg * 5.40;

    let totalSum = kozunPrice + eggPrice + cookiePrice + pricePaintEgg;

    console.log(totalSum.toFixed(2));

}
// 1 -- 20/21 April 2019
function easterParty(input) {
    let guests = Number(input[0]);
    let price = parseFloat(input[1]);
    let budget = parseFloat(input[2]);

    if (guests >= 10 && guests <= 15) {
        price = price * 0.85;
    } else if (guests > 15 && guests <= 20) {
        price = price * 0.80;
    } else if (guests > 20) {
        price = price * 0.75;
    }
    let cakePrice = budget * 0.10;
    let totalMoney = (guests * price) + cakePrice;
    let diff = Math.abs(budget - totalMoney);
    if (budget >= totalMoney) {
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${diff.toFixed(2)} leva needed.`);
    }
}
// 2
function easterTrip(input) {
    let country = input[0];
    let dates = input[1];
    let days = Number(input[2]);
    let pricePerNight = 0;

    switch (country) {
        case "France":
            switch (dates) {
                case "21-23":
                    pricePerNight = 30;
                    break;
                case "24-27":
                    pricePerNight = 35;
                    break;
                case "28-31":
                    pricePerNight = 40;
                    break;
            }
            break;
        case "Italy":
            switch (dates) {
                case "21-23":
                    pricePerNight = 28;
                    break;
                case "24-27":
                    pricePerNight = 32;
                    break;
                case "28-31":
                    pricePerNight = 39;
                    break;
            }
            break;
        case "Germany":
            switch (dates) {
                case "21-23":
                    pricePerNight = 32;
                    break;
                case "24-27":
                    pricePerNight = 37;
                    break;
                case "28-31":
                    pricePerNight = 43;
                    break;
            }
            break;

    }
    let totalPrice = days * pricePerNight;
    console.log(`Easter trip to ${country} : ${totalPrice.toFixed(2)} leva.`);
}
// 3
function easterEggBattle(input) {
    let index = 0;
    let countEgg1 = Number(input[index]);
    index++;
    let countEgg2 = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    while (command != "End of battle") {
        if (command == "one") {
            countEgg2--;
        } else if (command == "two") {
            countEgg1--;
        }
        if (countEgg1 == 0) {
            console.log(`Player one is out of eggs. Player two has ${countEgg2} eggs left.`);
            break;
        } else if (countEgg2 == 0) {
            console.log(`Player two is out of eggs. Player one has ${countEgg1} eggs left.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command == "End of battle") {
        console.log(`Player one has ${countEgg1} eggs left.`);
        console.log(`Player two has ${countEgg2} eggs left.`);
    }
}
//4
function easterEgg(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;

    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;
    for (let i = 1; i <= num; i++) {
        let colour = input[index++];
        switch (colour) {
            case 'red':
                redEggs++;
                break;
            case 'orange':
                orangeEggs++;
                break;
            case 'blue':
                blueEggs++;
                break;
            case 'green':
                greenEggs++;
                break;
        }
    }
    let maxNumber = redEggs;
    let maxColour = "red";
    if (orangeEggs > maxNumber) {
        maxColour = "orange";
        maxNumber = orangeEggs;
    }
    if (blueEggs > maxNumber) {
        maxColour = "blue";
        maxNumber = blueEggs;
    }
    if (greenEggs > maxNumber) {
        maxColour = "green";
        maxNumber = greenEggs;
    }

    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);
    console.log(`Max eggs: ${maxNumber} -> ${maxColour}`);
}
// 5 

function easter(input) {
    let index = 0;
    let easterBread = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let points = 0;
    let localPoints = 0;
    let bestChef = '';
    let bestScore = 0;

    for (let i = 0; i < easterBread; i++) {
        points = 0;
        let chef = command;
        command = input[index];
        index++;
        while (command !== 'Stop') {
            localPoints = Number(command);

            points += localPoints;
            command = input[index];
            index++;

        }
        if (points >= bestScore) {

            bestScore = points;

            bestChef = chef;

            console.log(`${bestChef} has ${bestScore} points.`);

            console.log(`${chef} is the new number 1!`);
        } else {
            console.log(`${chef} has ${points} points.`);
        }
        command = input[index];
        index++;

    }

    console.log(`${bestChef} won competition with ${bestScore} points!`);
}
//6
//1-6 v1
function easterBakery(input) {
    let flourPriceKg = parseFloat(input[0]);
    let flourKg = parseFloat(input[1]);
    let sugarKg = parseFloat(input[2]);
    let eggPack = Number(input[3]);
    let yeastPack = Number(input[4]);

    let sugarPriceKg = flourPriceKg * 0.75;
    let eggPricePack = flourPriceKg * 1.1;
    let yeastPricePack = sugarPriceKg * 0.2;

    let totalM = flourPriceKg * flourKg + sugarPriceKg * sugarKg + eggPricePack * eggPack + yeastPricePack * yeastPack;
    console.log(`${totalM.toFixed(2)}`);
}
// 1 v2 
function easterGuests(input) {
    let guests = Number(input[0]);
    let budget = Number(input[1]);
    let countBread = Math.ceil(guests / 3.0); //!
    let eggCount = (guests * 2);

    let priceBread = countBread * 4;
    let priceEgg = eggCount * 0.45;
    let totalMoney = priceBread + priceEgg;

    if (totalMoney <= budget) {
        let diff = Math.abs(budget - totalMoney);
        console.log(`Lyubo bought ${countBread} Easter bread and ${eggCount} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);
    } else {
        let diff = Math.abs(budget - totalMoney);
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }
}
// 2
function paintingEggs(input) {
    let size = input[0];
    let color = input[1];
    let count = Number(input[2]);
    let price = 0;
    switch (size) {
        case "Large":
            if (color == "Red") {
                price = 16;
            } else if (color == "Green") {
                price = 12;
            } else if (color == "Yellow") {
                price = 9;
            }
            break;
        case "Medium":
            if (color == "Red") {
                price = 13;
            } else if (color == "Green") {
                price = 9;
            } else if (color == "Yellow") {
                price = 7;
            }
            break;
        case "Small":
            if (color == "Red") {
                price = 9;
            } else if (color == "Green") {
                price = 8;
            } else if (color == "Yellow") {
                price = 5;
            }
            break;
    }
    let totalPrice = count * price;
    let expenses = totalPrice * 0.35;
    totalPrice = (totalPrice - expenses);
    console.log(`${totalPrice.toFixed(2)} leva.`);
}
//3
function easterShop(input) {
    let index = 0;
    let eggFirst = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let soldEggs = 0;
    while (command != "Close") {
        if (command == "Fill") {
            let toFill = Number(input[index]);
            index++;
            eggFirst += toFill;
        } else if (command == "Buy") {
            let count = Number(input[index]);
            index++;
            if (count <= eggFirst) {
                eggFirst -= count;
                soldEggs += count;
            } else {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${eggFirst}.`);
                break;
            }
        }
        command = input[index];
        index++;
    }
    if (command == "Close") {
        console.log(`Store is closed!`);
        console.log(`${soldEggs} eggs sold.`);
    }
}
//4 
function easterKozun(input) {
    let kozunaci = Number(input[0]);
    let totalSugar = 0;
    let totalFlour = 0;
    let maxFlour = 0;
    let maxSugar = 0;
    let count = 0;

    for (let i = 1; i <= input.length; i++) {
        let sugar = Number(input[i++]);
        let flour = Number(input[i]);
        count++;

        totalFlour += flour;
        totalSugar += sugar;

        if (flour > maxFlour) {
            maxFlour = flour;
        }
        if (sugar > maxSugar) {
            maxSugar = sugar;
        }
        if (count == kozunaci) {
            break;
        }
    }
    console.log(`Sugar: ${Math.ceil(totalSugar/950)}`);
    console.log(`Flour: ${Math.ceil(totalFlour/750)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}
//5
function easterDec(input) {
    let customers = Number(input[0]);
    let wholeSum = 0;
    let productsCount = 0;
    let counter = 0;
    for (let i = 1; i <= input.length; i++) {
        let command = input[i];
        let productNum = 0;
        let price = 0;
        let basket = 0;
        let wreath = 0;
        let chocolateBunny = 0;
        while (command !== "Finish") {

            if (command === "basket") {
                basket++;
            } else if (command === "wreath") {
                wreath++;
            } else if (command === "chocolate bunny") {
                chocolateBunny++;
            }
            i++;
            command = input[i];
            productsCount++;
        }

        productNum = basket + wreath + chocolateBunny;
        price = (basket * 1.50) + (wreath * 3.80) + (chocolateBunny * 7);
        if (productNum % 2 == 0) {
            price = price - (price * 0.2);
        }
        wholeSum += price;
        console.log(`You purchased ${productNum} items for ${price.toFixed(2)} leva.`);
        counter++;
        if (counter === customers) {
            break;
        }
    }
    console.log(`Average bill per client is: ${(wholeSum / customers).toFixed(2)} leva.`);
}
easterDec(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"]);
//6
