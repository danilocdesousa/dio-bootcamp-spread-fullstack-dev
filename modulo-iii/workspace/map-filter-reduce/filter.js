function filterEven(array) {
    return array.filter(myFunction);
}

function myFunction(item) {
    return item % 2 === 0;
}

const myArray = [4, 8, 12, 3, 5, 78, 9, 68, 53, 44];
console.log(filterEven(myArray));