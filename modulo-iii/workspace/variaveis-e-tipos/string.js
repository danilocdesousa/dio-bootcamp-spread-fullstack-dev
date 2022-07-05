// Strings e métodos importantes.

/* Declaração de strings. */
let firstName = "João";
let lastName = "Silva";

/* Concatenação de strings. */
console.log(`${firstName.concat(lastName)}`);
console.log(`${firstName.concat(lastName).length}`);

/* Declaração de strings e objetos. */
let word1 = "Lorem";
let word2 = new String("Lorem");

/* Localiza o tipo de dados de uma variável JavaScript. */
console.log(`${typeof word1}`);
console.log(`${typeof word2}`);

/* Retorna o comprimento de uma string. */
console.log(`${word2.length}`);

/* Mostra o conteúdo de um índice de string. */
console.log(`${firstName[0]}`);

/* Formas de registro de mensagens no console. */
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);
console.log("\"\"");

let phrase = "Lorem ipsum.";

/* Dividi uma string em uma matriz de substrings. */
console.log(`${phrase.split("")}`);
console.log(`${phrase.split(" ")}`);

/* Verifica se uma string contém uma string especificada. */
console.log(`${phrase.includes("ipsum")}`);
console.log(`${phrase.includes("Ipsum")}`);

/* Verifica se uma string começa com uma string especificada. */
console.log(`${phrase.startsWith("Lor")}`);

/* Verifica se uma string termina com uma string especificada. */
console.log(`${phrase.endsWith(".")}`);

/* Retorna uma nova string com os valores substituídos, sem alterar a string original. */
console.log(`${phrase.replace(".", "!")}`);
console.log(`${phrase}`);

/* Altera a string original pela nova string com os valores substituídos. */
phrase = phrase.replace(".", "!");
console.log(`${phrase}`);
