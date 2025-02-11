// let arr = [1, 3, 8, 12, 44, 57, 99, 110];

// console.log(arr);
// for(i = 0; i<arr.length; i++){
    
//     console.log(arr[i]);
// }

let x = [1, 3, 8, 12, 44, 57, 99, 110]

function push(arr, element){
    arr.push(element);
    console.log(`the new array is ${arr}`);
    return arr;
}

push(x, 150);

function pop(arr){
    arr.pop();
    console.log(`the new array is ${arr}`);
    return arr;
}

pop(x);

function shift(arr){
    arr.shift();
    console.log(`the new array is ${arr}`);
    return arr;
}

shift(x);

function unshift(arr, element){
    arr.unshift(element);
    console.log(`the new array is ${arr}`);
    return arr;
}

unshift(x, 1);

//for each loop on array

let y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

y.forEach((element, index, array) => {
    console.log(element, index, array);
});

y.forEach((e) => {
    console.log(e * 2);
});

//map function on array

y.map((e) => {
    console.log(e * 2);
})

//filter function on array

console.log(y.filter((element) => {
    return element % 2 === 0;
}));

//reduce function on array

let z = [1, 2, 3, 4, 5];

const multiply = (a, b) => {
    return a * b;
}

console.log(z.reduce(multiply));