let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// A.P.I implementation with XMLHttpRequest 

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true); // true by default to async calls 
        xhttp.onreadystatechange = function(event) {
            /* 
            Holds the status of the XMLHttpRequest.
            0: request not initialized
            1: server connection established
            2: request received
            3: processing request
            4: request finished and response is ready
            */
            if (xhttp.readyState === 4) {
                xhttp.status === 200
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api))
            }
        }
        // sending request
        xhttp.send(); 
    });
}

module.exports = fetchData;