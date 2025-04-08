document.title = "document-object-model";

function sum(){
    const a = document.getElementById("first").value;
    const b = document.getElementById("second").value;
    
    //promise approach with .then() for async functions
    // fetch("http://localhost:3000/sum?a=" + a + "&b=" + b)
    // .then((response) => {
    //     response.text()
    //     .then((ans) => {
    //        document.getElementById("result").innerHTML = ans;
    //     })
    // })
    //better approach towards async functions using async await
    //async function sum2(){
        // const a = document.getElementById("first").value;
        // const b = document.getElementById("second").value;
        //const response = await fetch("http://localhost:3000/sum?a=" + a + "&b=" + b)
        //const ans = await response.text();
        //document.getElementById("result").innerHTML = ans;
    // }

   const element = document.getElementById("result");
   element.innerHTML = `the sum fo ${a} and ${b} is: ${parseInt(a) + parseInt(b)}` ;
}