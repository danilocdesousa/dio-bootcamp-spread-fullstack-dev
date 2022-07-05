let inputField = document.getElementById("inputField")
let buttonAdd = document.getElementById("buttonAdd");
let todoList = document.getElementById("todoList");

/* Cria e adiciona item na lista */
function myToDoList() {

    /* Verifica se <input> está diferente de vazio para continuar */
    if (inputField.value != "") {
        var listItem = document.createElement("li");
        listItem.classList.add("list-item");
        todoList.appendChild(listItem);

        /* Cria <input type="checkbox"> e o adiciona ao item da lista */
        var inputCheckbox = document.createElement("input");
        inputCheckbox.classList.add("checkbox")
        inputCheckbox.type = "checkbox";
        listItem.appendChild(inputCheckbox);

        /* Cria tag <span> e o adiciona ao item da lista  */
        var addSpan = document.createElement("span");
        addSpan.classList.add("todo-item");
        listItem.appendChild(addSpan);

        /* Adiciona texto ao item da lista */
        addSpan.innerText = inputField.value;

        /* Esvazia o <input> após o clique do botão*/
        inputField.value = "";

        /* Remove item com duplo clique */
        addSpan.addEventListener("dblclick", function () {
            todoList.removeChild(listItem);
        })
    }
    console.log(inputField.value);
}

/* Configura evento para o botão com click */
buttonAdd.addEventListener("click", function () {
    myToDoList();
});

/* Configura evento para o botão com Enter */
inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        myToDoList();
    }
});