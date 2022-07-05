function replaceEven(array) {
    /* Verifica se a array é vazia. */
    if (!array.length)
        return -1;

    for (let i = 0; i < array.length; i++) {
        /* Verifica se a array contém apenas números. */
        if (typeof array[i] != "number")
            return -1;

        /* Substitui os números pares por 0 (zero). */
        if (array[i] % 2 === 0)
            array[i] = 0;
    }
    return array;
}

myArray = [6, 4, 7, 0, 10, 8, 8, 2, 6, 10];
console.log(replaceEven(myArray));