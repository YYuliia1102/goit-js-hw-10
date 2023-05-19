import API from "./fetchCountries.js";

import Notiflix from 'notiflix';
const _ = require('lodash');

const DEBOUNCE_DELAY = 300;
const myInput = document.querySelector("#search-box");
const list = document.querySelector('.country-list');
const info = document.querySelector('.country-info');

const findCountries = _.debounce(function (event) {

    const value = event.target.value.trim();

    if (value === "") {
        Notiflix.Notify.warning('Field empty');
        clearInfo()
        return;
    }

    API.fetchCountries(value).then((result) => {
        clearInfo()
        if ((typeof result.status !== 'undefined' && result.status === 404) || !result.length) {
            Notiflix.Notify.failure('Oops, there is no country with that name');
            return;
        }

        if (result.length > 1 && result.length <= 10) {
            list.innerHTML = getListCountry(result);
        } else if(result.length === 1){
            info.innerHTML = getFullCountry(result);
        } else {
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        }
    });
}, DEBOUNCE_DELAY)

myInput.addEventListener("keyup", findCountries);

function clearInfo() {
    list.innerHTML = "";
    info.innerHTML = "";
}

function getFullCountry(country) {

    return country.map(({ flags, name, capital, population, languages }) => {
        languages = Object.values(languages).join(', ');
        return `
        <img src="${flags.svg}" width="70" alt="name" />
        <h1>${name.official}</h1>
        <h2>Capital: ${capital}</h2>
        <p>Population: ${population}</p>
        <p>Languages: ${languages}</p>`
    }).join('')
}

function getListCountry(country) {

    return country.map(({ flags, name, }) => {
        return `<li class ="short-list">
        <img src="${flags.svg}" width="70" height="35" alt="name" />
        <h1>${name.official}</h1>
      </li>`
    }).join('')
}

