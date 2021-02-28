function numbersEndinginSeven() {
  for (let i = 7; i <= 997; i++) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }
}
//1 exercise
function multiplicationTable(input) {
  let n = Number(input[0]);
  for (let i = 1; i <= 10; i++) {
    let result = i * n;
    console.log(`${i} * ${n} = ${result}`);
  }
}
//2 exercise
function leapYears(input) {
  let startYear = Number(input[0]);
  let endYear = Number(input[1]);

  for (let i = startYear; i <= endYear; i += 4) {
    console.log(i);
  }
}
//3 exercise
function factioriel(input) {
  let n = Number(input[0]);
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  console.log(result);
}
// 4 exercise
function countTheWords(input) {
  let text = input[0];
  let counter = 1;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      counter++;
    }
  }
  if (counter > 10) {
    console.log(`The message is too long to be send! Has ${counter} words.`);
  } else {
    console.log("The message was send successfully!");
  }
}
// 5 exercise
function histogram(input) {
  let n = Number(input[0]);
  let p1Counter = 0;
  let p2Counter = 0;
  let p3Counter = 0;
  let p4Counter = 0;
  let p5Counter = 0;
  for (let i = 1; i <= n; i++) {
    let num = Number(input[i]);
    if (num < 200) {
      p1Counter++;
    } else if (num >= 200 && num <= 399) {
      p2Counter++;
    } else if (num >= 400 && num <= 599) {
      p3Counter++;
    } else if (num >= 600 && num <= 799) {
      p4Counter++;
    } else {
      p5Counter++;
    }
  }
  let p1Result = p1Counter / n * 100;
  let p2Result = p2Counter / n * 100;
  let p3Result = p3Counter / n * 100;
  let p4Result = p4Counter / n * 100;
  let p5Result = p5Counter / n * 100;

  console.log(p1Result.toFixed(2) + "%");
  console.log(p2Result.toFixed(2) + "%");
  console.log(p3Result.toFixed(2) + "%");
  console.log(p4Result.toFixed(2) + "%");
  console.log(p5Result.toFixed(2) + "%");
}
//6 exercise
  
function divider(input){
    let n = input[0];
    let dividrByTwo = 0;
    let divideByThree = 0;
    let divideByFour = 0;

    for (let index = 1; index < input.length; index++) {
        let element = input[index];
        if(element % 2 === 0){
            dividrByTwo++;
        }

        if(element % 3 == 0){
            divideByThree++;
        }
        
        if(element % 4 == 0){
            divideByFour++;
        }
    }

    let resultByTwo = (dividrByTwo / n * 100).toFixed(2);
    let resultByThree = (divideByThree / n * 100).toFixed(2);
    let resultByFour = (divideByFour / n * 100).toFixed(2); 

    console.log(`${resultByTwo}%`);
    console.log(`${resultByThree}%`);
    console.log(`${resultByFour}%`);
}
// 7 exercise
function salary(input) {
  let openTab = Number(input[0]);
  let incomeSalary = Number(input[1]);
  let isLostSalary = false;
  let index = 2;
  for (let i = 1; i <= openTab; i++) {
    let name = input[index];
    index++;

    if (name == "Facebook") {
      incomeSalary -= 150;
    } else if (name === "Instagram") {
      incomeSalary -= 100;
    } else if (name === "Reddit") {
      incomeSalary -= 50;
    }

    if (incomeSalary <= 0) {
      isLostSalary = true;
      break;
    }
  }
  if (isLostSalary) {
    console.log("You have lost your salary.");
  } else {
    console.log(Number.parseInt(incomeSalary));
  }
}
// 8 exercise with attetion!
function minNumber(input){
  let numbersCount = input[0];
  let numberMin = Number.MAX_SAFE_INTEGER;

  for (let index = 1; index <= numbersCount; index++) {
      const element = Number(input[index]);
      if(element < numberMin){
          numberMin = element;
      }
  }
  console.log(numberMin);
}
// 9 exercise with attetion!
// 1-9 exercise