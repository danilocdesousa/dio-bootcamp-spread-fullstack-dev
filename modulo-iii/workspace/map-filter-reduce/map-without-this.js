function mapWithoutThis(array) {
    return array.map((item) => {
        return item * 2;
    });
}

myArray = [0, 1, 2, 3, 4];
console.log(mapWithoutThis(myArray));
console.log(myArray);