console.log("before promise");

function myOwnPromise(duration){
    let p = new Promise((resolve) => {
        setTimeout(() => {
            console.log("in promise!");
            resolve("resolved!");
        }, duration);
    });

    return p;
}

async function main(){
    let result = await myOwnPromise(3000);
    console.log(result);
}

main();

console.log("after promise");