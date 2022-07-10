const BASE_URL = "https://api.thecatapi.com/v1/images/search";
const catPic = document.getElementById("cat-pic");
const changeCat = document.getElementById("change-cat");

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json[0].url;
    } catch (error) {
        console.log(error.message);
    }
};

const loadImage = async () => {
    catPic.src = await getCats();
};

loadImage();

changeCat.addEventListener("click", loadImage);