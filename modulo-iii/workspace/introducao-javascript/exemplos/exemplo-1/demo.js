function even(array) {
    let evenNumbers = [];
    let oddNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNumbers.push(array[i]);
        }
        else {
            oddNumbers.push(array[i]);
        }
    }
    console.log(`Even: ${evenNumbers}`);
    console.log(`Odd: ${oddNumbers}`);
}

let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6];

even(numbers);
