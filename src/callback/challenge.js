let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


// A.P.I implementation with SMLHttpRequest 

function fetchData(url_api, callback){ 
    let xhttp = new XMLHttpRequest();
    /* 
    A nuestra referencia xhttp le pasamos un LLAMADO 'open'
    donde: parametro1 = el metodo, parametro2 = la url,
    parametro3 = verificación si es asincrono o no, valor por defecto true
    */
    xhttp.open('GET', url_api, true); // true by default to async calls 
    xhttp.onreadystatechange = function (event){
        /* 
        Holds the status of the XMLHttpRequest.
        0: request not initialized
        1: server connection established
        2: request received
        3: processing request
        4: request finished and response is ready
        */
        if(xhttp.readyState === 4){ 
            if(xhttp.status === 200){
                // Node standard to callbacks, first parameter: error, second parameter: result
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    // sending request
    xhttp.send();
}