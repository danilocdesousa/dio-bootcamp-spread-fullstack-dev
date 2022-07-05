const studentsList = [
    {
        studentName: "Maria",
        punctuation: 6,
        class: "A",
    },
    {
        studentName: "Luiz",
        punctuation: 7,
        class: "B",
    },
    {
        studentName: "Pedro",
        punctuation: 4,
        class: "C",
    }
];

function approved(array, media) {
    let approved = [];
    for (let i = 0; i < array.length; i++) {
        const { punctuation, studentName } = array[i];
        if (punctuation >= media) {
            approved.push(studentName);
        }
    }
    return approved;
}

console.log(approved(studentsList, 5));