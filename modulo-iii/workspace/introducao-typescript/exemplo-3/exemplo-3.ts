const myInput1 = document.getElementById("input") as HTMLInputElement;
myInput1.addEventListener("input", (event) => {
    const allInputs = event.currentTarget as HTMLInputElement;
    console.log(allInputs.value);
});