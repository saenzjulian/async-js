const fetchData = require('../utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character/';

// how many characters exists
// get the first result
// get the dimension

fetchData(API)
.then(data => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`);
})
.then(data => {
    console.log(data.name);
    return fetchData(data.origin.url);
}).then(data => {
    console.log(data.dimension)
})
.catch(error => { console.error(error); })