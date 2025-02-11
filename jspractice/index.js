
console.log("Hello, world!");

//functions

function sum(a, b){
    return a+b;
}

let ans = sum(100, 30);
console.log(ans);

// function factorial(n){
//     if(n <= 1){
//         return 1;
//     }
//     return n*factorial(n-1);
// }

function fact(n){
    let arr = Array.from(Array(n+1).keys());
    let sliced = arr.slice(1,)
    let factor = sliced.reduce((a, b) => {
        return a*b;
    });

    return factor;
}

let result = fact(6);
console.log(result);

//buisness name generator
let word1, word2, word3;
let rand1 = Math.floor(Math.random()*10)+1;
if(rand1 <= 3){
    word1 = "crazy";
}
else if(rand1 > 3 && rand1 <= 7){
    word1 = "fire";
}
else{
    word1 = "amazing";
}
let rand2 = Math.floor(Math.random()*10)+1;
if(rand2 <= 3){
    word2 = "engine";
}
else if(rand2 > 3 && rand2 <= 7){
    word2 = "foods";
}
else{
    word2 = "garments";
}
let rand3 = Math.floor(Math.random()*10)+1;
if(rand3 <= 3){
    word3 = "bros";
}
else if(rand3 > 3 && rand3 <= 7){
    word3 = "limited";
}
else{
    word3 = "hub";
}

console.log(`the business name is ${word1} ${word2} ${word3}`);