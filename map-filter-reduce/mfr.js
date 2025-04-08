//********||MAP||**********\\

const arr = [2,55,11,6,8,100];

let ans = arr.map((e) => {
    return e*2;
})

console.log(ans);

//********||FILTER||**********\\

function evennum(arr){

    return arr%2 == 0;
}

let answer = arr.filter(evennum);

console.log(answer);