function validatesArray(array, num) {
    try {
        if (!array && !num)
            throw new ReferenceError("Verifique os parâmetros.");
        if (typeof array !== "object")
            throw new TypeError("O array precisa ser do tipo object.");
        if (typeof num !== "number")
            throw new TypeError("O parâmetro num precisa ser do tipo number.");
        if (array.length !== num)
            throw new RangeError("Tamanho de array inválido");
        return array;
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Ocorreu uma referência ilegal.");
            console.log(error.message);
        } else if (error instanceof TypeError) {
            console.log("Ocorreu um erro de tipo.");
            console.log(error.message);
        } else if (error instanceof RangeError) {
            console.log("Ocorreu um número \"fora do intervalo\".");
            console.log(error.message);
        } else {
            console.log(`Ocorreu um tipo de erro inesperado. ${error}`);
        }
    }
}

console.log(validatesArray([1, 2, 3], 3));