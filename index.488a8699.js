!function(){var t={fetchCountries:function(t){return fetch("".concat("https://restcountries.com/v3.1/name/").concat(t)).then((function(t){return t.json()}))}};document.querySelector("#search-box").addEventListener("keyup",(function(n){var e=n.currentTarget.value.trim();t.fetchCountries(e).then((function(t){return console.log(t)}))}))}();
//# sourceMappingURL=index.488a8699.js.map
