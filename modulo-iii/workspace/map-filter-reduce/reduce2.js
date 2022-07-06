const myList = [
    {
        name: "camiseta",
        preco: 30
    },
    {
        name: "vestido",
        preco: 40
    },
    {
        name: "meias",
        preco: 12
    },
];

const myBalance = 100;

function finalBalance(value, list) {
    return myList.reduce(function (previous, current) {
        /*
        console.log({ previous });
        console.log({ current });
        */
        return previous - current.preco;
    }, value);
}

console.log(finalBalance(myBalance, myList))