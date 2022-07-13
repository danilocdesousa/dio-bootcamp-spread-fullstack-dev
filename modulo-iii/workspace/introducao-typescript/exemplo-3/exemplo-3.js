const myInput = document.getElementById("input");
myInput.addEventListener("input", (event) => {
    const allInputs = event.currentTarget;
    console.log(allInputs.value);
});