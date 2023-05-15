import './css/styles.css';

const URL = "https://restcountries.com/v3.1/name/"

// https://restcountries.com/v3.1/name/{name}


function fetchCountries(name) {
    return fetch(`${URL}${name}`).then((res) =>
        res.json());
}

export default { fetchCountries };