// simple promise
const somethingWillHappend = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('hey!');
        }else{
            reject('Whooops!');
        }
    });
}

somethingWillHappend()
.then(response => console.log(response))
.catch(err => console.log(err)); 


// promise with error trace
somethingWillHappend2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000);
        }else{
            const error = new Error('Whoops!');
            reject(error);
        }
    });
}

somethingWillHappend2()
.then(response => console.log(response))
.catch(err => console.error(err));


// how run multiple promises at the same time
Promise.all([somethingWillHappend(), somethingWillHappend2()])
.then(response => {
    console.log('Array of results', response);
})
.catch(error => {
    console.error(error);
})