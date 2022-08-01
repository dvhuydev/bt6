// Session 1
function findMin() {
    let minNumber = Number(document.getElementById("minNumber").value);
    let nSecret = 0;
    let sumNumber = 0;
    while (sumNumber < 10000) {
        nSecret++;
        sumNumber += nSecret;
    }
    document.getElementById("results").innerHTML = `Số nhỏ nhất để tổng từ 1 đến nó lớn hơn 10000 là: ${nSecret}`
    document.getElementById("resultsSum").innerHTML = `Tổng các số từ 1 đến ${nSecret} là: ${sumNumber}`
}
findMin();

//======================================


// Sesson 2
function sumBothsecret() {
    const xSecret = Number(document.getElementById("xSecret").value);
    const nSecret = Number(document.getElementById("nSecret").value);
    let sumTotal = 0;
    let i = 1;
    while (i <= nSecret) {
        sumTotal += Math.pow(xSecret, i);
        i++;
    }
    document.getElementById("sumResults").innerHTML = `S(n) = ${sumTotal}`;
}
sumBothsecret();

//======================================



function countFactorial() {

    const factorial = Number(document.getElementById("factorial").value);
    let sumFactorial = 1;

    let i = 2
    for ( i ; i <= factorial; i++ ) {
        sumFactorial *= i;
    }
    document.getElementById("factorialReults").innerHTML = `Factorial(Giai thừa) = ${sumFactorial}`;
}
countFactorial();

//======================================



function changeBackground() {

    const divNumber = Number(document.getElementById("divNumber").value);

    let background = "";
    let i = 1
    for ( i ; i <= divNumber; i++) {
        if (i % 2 === 0) {
            background += '<div class="bg-danger">div chẵn</div>';
        } else {
            background += '<div class="bg-primary">div lẻ</div>';
        }
    }
    document.getElementById("backgroundUpdate").innerHTML = background;
    document.getElementById("backgroundUpdate").style.display = "block";
}
changeBackground();