function tenisEquipment(input) {
    let pricePerRocket = parseFloat(input[0]);
    let countRocket = Number(input[1]);
    let coupleShoes = Number(input[2]);

    let allRocket = pricePerRocket * countRocket;

    let priceShoes = pricePerRocket / 6;
    let allShoes = priceShoes * coupleShoes;
    let otherEquip = (allShoes + allRocket) * 0.2;
    let totalPrice = allRocket + allShoes + otherEquip;
    let priceJoko = totalPrice / 8;
    let priceSponsor = (totalPrice * 7) / 8;

    console.log(`Price to be paid by Djokovic ${Math.trunc(priceJoko)}`); //!
    console.log(`Price to be paid by sponsors ${Math.ceil(priceSponsor)}`); //!
}
// 1  9-10 march 2019
function addBags(input) {
    let priceLuggage = parseFloat(input[0]);
    let lugKilos = parseFloat(input[1]);
    let days = Number(input[2]);
    let count = Number(input[3]);

    if (lugKilos < 10) {
        priceLuggage = priceLuggage * 0.2;
    } else if (lugKilos >= 10 && lugKilos <= 20) {
        priceLuggage = priceLuggage * 0.5;
    } else if (lugKilos > 20) {
        priceLuggage = priceLuggage;
    }

    if (days >= 30) {
        priceLuggage = priceLuggage * 0.90;
    } else if (days >= 7 && days <= 30) {
        priceLuggage = priceLuggage * 1.15;
    } else if (days < 7) {
        priceLuggage = priceLuggage * 1.40;
    }

    console.log(` The total price of bags is: ${(priceLuggage * count).toFixed(2)} lv.`);
}
// 2 
function oscarsWeek(input) {
    let nameMovie = input[0];
    let kind = input[1];
    let countTickets = Number(input[2]);
    let price = 0;

    for (let i = 0; i < countTickets; i++) {
        if (nameMovie == "A Star Is Born") {
            switch (kind) {
                case "normal":
                    price += 7.5;
                    break;
                case "luxury":
                    price += 10.5;
                    break;
                case "ultra luxury":
                    price += 13.5;
                    break;
                default:
                    break;
            }
        }

        if (nameMovie == "Bohemian Rhapsody") {
            switch (kind) {
                case "normal":
                    price += 7.35;
                    break;
                case "luxury":
                    price += 9.45;
                    break;
                case "ultra luxury":
                    price += 12.75;
                    break;
                default:
                    break;
            }
        }
    }
    if (nameMovie == "Greek Book") {
        switch (kind) {
            case "normal":
                price += 8.15;
                break;
            case "luxury":
                price += 10.25;
                break;
            case "ultra luxury":
                price += 13.25;
                break;
            default:
                break;
        }
    }

    if (nameMovie == "The Favourite") {
        switch (kind) {
            case "normal":
                price += 8.75;
                break;
            case "luxury":
                price += 11.55;
                break;
            case "ultra luxury":
                price += 13.95;
                break;
            default:
                break;
        }
    }
    console.log(`${nameMovie} -> ${price.toFixed(2)} lv.`);
}
// 3

function bus(input) {
    let passengers = Number(input.shift());
    let stops = Number(input.shift());
    for (let i = 1; i <= stops; i++) {
        get_off = Number(input.shift());
        get_up = Number(input.shift());
        if (i % 2 != 0) {
            get_up += 2;
        } else {
            get_off += 2;
        }

        passengers -= get_off;
        passengers += get_up;

    }

    console.log(`The final number of passengers is : ${passengers}`);

}
//4 
function christmasGifts(input) {
    let countAdult = 0;
    let countKid = 0;
    let sumToys = 0;
    let sumSweater = 0;

    for (let i = 0; i <= input.length; i++) {
        let command = input[i];
        if (command === "Christmas") {
            break;
        }
        age = Number(command);
        if (age <= 16) {
            countKid++;
            sumToys += 5;
        } else {
            countAdult++;
            sumSweater += 15;
        }

    }
    console.log(`Number of adults: ${countAdult}`);
    console.log(`Number of kids: ${countKid}`);
    console.log(`Money for toys: ${sumToys}`);
    console.log(`Money for sweaters: ${sumSweater}`);
}
//5
function goldenMine(input) {
    let locations = Number(input[0]);
    let locationsCount = 0;

    for (let i = 1; i <= input.length; i++) {
        let count = 0;
        let tmpGold = 0;
        let goldTarget = Number(input[i++]);
        let days = Number(input[i++]);
        while (count !== days) {
            tmpGold += Number(input[i++]);
            count++;
        }
        i--;

        if (tmpGold / days >= goldTarget) {
            console.log(`Good job! Average gold per day: ${(tmpGold / days).toFixed(2)}.`);
        } else console.log(`You need ${(goldTarget - tmpGold / days).toFixed(2)} gold.`);
        locationsCount++;
        if (locationsCount === locations) {
            break;
        }

    }

}
//6
goldenMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);