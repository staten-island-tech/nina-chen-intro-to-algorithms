function factorial(n){ //inputs the number n and an a number i
    //guard clause
    if (n<1){
        return;
    }
    let result = 1;
    for (let i = 1; i<=n; i++){
        result *= i;
    }
    return result;
}

function newFactorial(n){
    if(n>0){
        let result = 1;
        for (let i = 1; i<=n; i++){
            result *= i;
        }
    return result;
    }
    else{
        return;
    }
}