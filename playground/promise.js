var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b); 
            } else {
                reject('Please enter a valid number.');
            }      
        }, 2500);
    });
}

asyncAdd(4, 2).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Result: ', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});