function sumNumbers(array) {
    return array.reduce(function (previous, current) {
        /*
        console.log({ previous });
        console.log({ current });
        */
        return previous + current;
    }, 0);
}

const myArray = [1, 2, 3];
console.log(sumNumbers(myArray));