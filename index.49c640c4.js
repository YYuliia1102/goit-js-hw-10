var e={fetchCountries:function(e){return fetch(`https://restcountries.com/v3.1/name/${e}`).then((e=>e.json()))}};document.querySelector("#search-box").addEventListener("keyup",(function(t){const n=t.currentTarget.value.trim();e.fetchCountries(n).then((e=>console.log(e)))}));
//# sourceMappingURL=index.49c640c4.js.map
