function square(n){
    return n * n;
}

function cube(n){
    return n*n*n;
}

function calculatesum(a, b, fn){
    let val1 = fn(a);
    let val2 = fn(2);
    return val1 + val2;
}

let result = calculatesum(5, 4, square);

console.log(result);