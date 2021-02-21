function trapeziodArea(input) {
    let b1 = parseFloat(input[0]);
    let b2 = parseFloat(input[1]);
    let h = parseFloat(input[2]);
    let area = (b1 + b2) * h /2;
    console.log("Trapezoid area = "+ area);
}

function calculateCircleAreaAndPerimeter(input) {
    let r = parseInt(input[0]);
    console.log("Area= "+ (Math.PI * r * r));

    console.log("Perimeter= " + (2 * Math.PI * r));
}


function calculateRectangleArea(input) {
    let x1 = parseFloat(input[0]);
    let y1 = parseFloat(input[1]);
    let x2 = parseFloat(input[2]);
    let y2 = parseFloat(input[3]);
    let width = Math.max(x1,x2) - Math.min(x1,x2);
    let height = Math.max(y1,y2) - Math.min(y1,y2);

    console.log(width * height);
    console.log(2 * (width + height));
}

function convertCelsiumToFarenheit(input) {
    let celSium = parseFloat(input[0]);
    let farenHeit = parseFloat(input[1]);
    farenHeit = celSium * 1.8 + 32;
    console.log(farenHeit);
}





