// function main(){
//     fetch("https://jsonplaceholder.typicode.com/todos") //returns a promise
//     .then(async (response)=>{
//        const example = await response.json();
//        console.log(example);
//     })
// }

// main();

//this can also be written as

// async function main(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos") //returns a promise
//     const example = await response.json();
//     const ans = example.map((e) => {
//         console.log(e.title);
//     })
//     console.log(ans);
// }

const axios = require('axios')

// async function main(){
//     const response = await axios.get("https://jsonplaceholder.typicode.com/todos") //returns a promise
//     console.log(response.data)
// }

// main();

//in a get request we can only send query parameters and 2nd argument as headers that's it
// async function main(){
//     const response = await axios.get("https://httpdump.app/dumps/24a32235-c08d-42ee-89a5-b419a13419a3",{
//         headers: {
//             Authorization: "Bearer 123",
//         }
//     })
//     console.log(response.data)
// }

// main();

//in post, put and delete requests we can send body as second argument and 3rd argument as headers
async function main(){
    const response = await axios.post("https://httpdump.app/dumps/fcd08c2d-f911-48f4-a720-2a0952e4406c", {  //this url here is comming from HTTP dump
        username: "imran",
        password: "billion@25",
    }, {
        headers: {
            Authorization: "Bearer 123",
        }
    })
    console.log(response.data)
}

main();