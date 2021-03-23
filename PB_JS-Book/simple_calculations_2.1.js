function examRoom(input) {
    let l = parseFloat(input[0]);
    let w = parseFloat(input[1]);

    let columns = Math.floor(((w * 100) - 100) / 70);
    let rows = Math.floor((l * 100) / 120);

    let workSpaces = columns * rows - 3;

    console.log(Math.round(workSpaces));

}
// 1 exam task
function vegetableMarket(input) {
    let priceVegetable = parseFloat(input[0]);
    let priceFruit = parseFloat(input[1]);
    let quantityVeggie = Number(input[2]);
    let quantityFruit = Number(input[3]);

    let vegTotal = priceVegetable * quantityVeggie;
    let fruitTotal = priceFruit * quantityFruit;
    let totalPrice = (vegTotal + fruitTotal) / 1.94;

    console.log(totalPrice.toFixed(2));

}
// 2 exam task 

function changeTiles(input) {
    let nlength = Number(input[0]);
    let width  = parseFloat(input[1]);
    let lTiles = parseFloat(input[2]);
    let mWidth = Number(input[3]);
    let oLength = Number(input[4]);

    let area = nlength * nlength;
    let areaP =  width * lTiles;
    let areaBench = mWidth * oLength;
    let areaRoof = area - areaBench;
    let countTiles = areaRoof / areaP;
    let time = countTiles * 0.2;

    console.log(Math.round(countTiles * 100) /100);
    console.log(Math.round(time * 100) / 100);
}
// 3 exam task

function money(input) {
    let bitcoin = Number(input[0]);
    let chYuan = parseFloat(input[1]);
    let comission = parseFloat(input[2]) / 100;
    
    let bitcoinToLeva = bitcoin * 1168;
    let yuansToDolars = chYuan * 0.15;
    let dollarsToLeva = yuansToDolars * 1.76;

    let leva = bitcoinToLeva + dollarsToLeva;
    let euro = leva / 1.95;

    euro -= comission * euro;
    console.log(euro.toFixed(2));
}
// 4 exam task

function dailyEarnings(input) {
    let workDays = Number(input[0]);
    let dayProfit = parseFloat(input[1]);
    let currencyRate = parseFloat(input[2]);

    let mounthSalary = workDays * dayProfit;
    let yearSalary = (mounthSalary * 12) + (mounthSalary * 2.5);
    let taxes = yearSalary * 0.25;
    let netSalary = yearSalary - taxes;
    let salaryInLeva = netSalary * currencyRate;

    console.log((salaryInLeva / 365).toFixed(2));


}