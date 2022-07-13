// readonly

interface IDog {
    name: string;
    breed?: string;
}

type dogReadOnly = {
    +readonly [K in keyof IDog]-?: IDog[K]; // (-?)torna obrigatório o que é opcional.
}

class myDog implements dogReadOnly {
    name;
    breed;
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

const dog = new myDog("Rex", "Poodle");