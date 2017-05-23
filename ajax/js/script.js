const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));

function findMatches(wordTomatch, cities){
    return cities.filter(place => {
        const regex = new RegExp(wordTomatch, 'ig');
        return place.city.match(regex) || place.state.match(regex); 
    });
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function displayMatches(){
    const matches = findMatches(this.value, cities);
    
    const html = matches.map(place => {
        const regex = new RegExp(this.value,'ig');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); 
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`); 
        return `
            <li>
                <span>${cityName}</span>
                <span>${stateName}</span>
                <span>${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join('');

    suggestions.innerHTML = html;
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);