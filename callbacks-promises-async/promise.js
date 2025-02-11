// console.log("promises");

// let p = new Promise((resolve, reject) => {
//     let a = Math.floor(Math.random()*10)+1;
//     if(a < 5){
//         reject("got rejected since it was an even number");
//     }
//     else{
//         setTimeout(() => {
//             console.log("resolving the promise");
//             resolve("resolved the promise");
//         }, 3000);

//     }
// });

// p.then((e) => {
//     console.log(e);
// }).catch((err) => {
//     console.log(err);
// })

let p = new Promise((resolve, reject) => {
        let a = Math.floor(Math.random()*10)+1;
        if(a < 5){
            reject("got rejected since it was an even number");
        }
        else{
            setTimeout(() => {
                console.log("resolving the promise");
                resolve("resolved the promise");
            }, 3000);
    
        }
    });

    let p2 = new Promise((resolve, reject) => {
            let a = Math.floor(Math.random()*10)+1;
            if(a < 5){
                reject("got rejected since it was an even number in p2");
            }
            else{
                setTimeout(() => {
                    console.log("resolving the promise in p2");
                    resolve("resolved the promise in p2");
                }, 1000);
        
            }
        });

//  let p3 = Promise.all([p, p2]);

//  p3.then((e) => {
//     console.log(e);
//  }).catch((err) => {
//     console.log(err);
//  });

//  let p3 = Promise.allSettled([p, p2]);

//  p3.then((e) => {
//     console.log(e);
//  }).catch((err) => {
//     console.log(err);
//  });

//  let p3 = Promise.race([p, p2]);

//  p3.then((e) => {
//     console.log(e);
//  }).catch((err) => {
//     console.log(err);
//  });

 let p3 = Promise.any([p, p2]);

 p3.then((e) => {
    console.log(e);
 }).catch((err) => {
    console.log(err);
 });
