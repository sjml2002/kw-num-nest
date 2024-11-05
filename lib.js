
function avg(numbers) {
    let s = 0;
    for(let i=0; i<numbers.length; i++) {
        s += numbers[i];
    }
    return (s / numbers.length);
}

function prime(num) {
    if (num == 2)
        return (false);
    for(let i=parseInt(num/2); i>1; i--) {
        if (num%i == 0)
            return (false);
    }
    return (true);
}

function factorial(num) {
    if (num > 15)
        return (-1);
    // TODO
    let sumv = 1;
    for(let i=2; i<=num; i++)
        sumv *= i;
    return (sumv);
}


module.exports = {
    avg,
    prime,
    factorial,
}