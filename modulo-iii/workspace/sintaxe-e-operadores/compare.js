function sum(a, b) {
    return a + b;
}
function equality(a, b) {
    return (a === b) ? "são iguais" : "não são iguais";
}

function comparedTo10(a) {
    if (a === 10)
        return "igual a";
    return (a > 10) ? "maior que" : "menor que";
}

function comparedTo20(a) {
    if (a === 20)
        return "igual a";
    return (a > 20) ? "maior que" : "menor que";
}

let num1 = 15, num2 = 15;
let total = sum(num1, num2);
let equal = equality(num1, num2);
let comp10 = comparedTo10(total);
let comp20 = comparedTo20(total);

console.log(`Os números ${num1} e ${num2} ${equal}. Sua soma é ${total}, que é ${comp10} 10 e ${comp20} 20.`);
