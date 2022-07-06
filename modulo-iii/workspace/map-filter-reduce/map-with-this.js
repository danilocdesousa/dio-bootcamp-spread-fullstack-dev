const apple = {
    value: 2
};

const orange = {
    value: 3
};

function mapWithThis(array, thisArg) {
    return array.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const myArray = [1, 2, 3];
console.log(mapWithThis(myArray, apple));
console.log(mapWithThis(myArray, orange));