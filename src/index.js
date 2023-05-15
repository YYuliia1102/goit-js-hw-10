import API from "./fetchCountries.js";


const DEBOUNCE_DELAY = 300;

const myInput = document.querySelector("#search-box");
myInput.addEventListener("keyup", onSubmit);

function onSubmit(event){
    const value = event.currentTarget.value.trim();
    API.fetchCountries(value).then((result) => console.log(result));
}

