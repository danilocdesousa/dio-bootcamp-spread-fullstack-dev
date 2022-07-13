// Types & Interfaces

interface IAnimal {
    name: string;
    ecosystem: "terrestre" | "aquático";
}

interface IFeline extends IAnimal {
    felineSize: "pequeno" | "médio" | "grande";
}

interface ICanine extends IAnimal {
    canineSize: "pequeno" | "médio" | "grande";
}

const animal1: IAnimal = {
    name: "Elefante",
    ecosystem: "terrestre"
}

const felino: IFeline = {
    name: "Leão",
    ecosystem: "terrestre",
    felineSize: "grande"
}

type animalFamily = IFeline | ICanine;

const animal2: animalFamily = {
    name: "Lobo",
    ecosystem: "terrestre",
    canineSize: "médio"
}