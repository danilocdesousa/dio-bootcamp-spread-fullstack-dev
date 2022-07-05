function checksPalindromeV1(string) {
    /* Verifica se a string é válida */
    if (!string || !string.length)
        return -1;

    if (typeof string !== "string")
        return typeof string;

    /* Inverter string. */
    newString = string.split("").reverse().join("");

    /* Verificar se a string é um palíndromo. */
    let result;
    string === newString ? result = `${string} é um palíndromo` : result = `${string} não é um palíndromo`;
    return result;
}

function checksPalindromeV2(string) {
    /* Verifica se a string é válida */
    if (!string || !string.length)
        return -1;

    if (typeof string !== "string")
        return typeof string;

    /* Verificar se a string é um palíndromo. */
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return `${string} não é um palíndromo`;
        }
    }
    return `${string} é um palíndromo`;
}

console.log(checksPalindromeV1("asdfdsa"));
console.log(checksPalindromeV2("asdfdsa"));