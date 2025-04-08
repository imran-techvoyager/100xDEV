const express = require('express');
const app = express();
const port = 3001;

//writing middlewares

function userCheck(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "imrantech" || password != "pass"){
        res.status(400).json({
            msg: "wrong username or password"
        })
    }
    else{
        next();
    }
}

function kidneyCheck(req, res, next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId !=1 && kidneyId != 2){
        res.status(400).json({
            msg: "wrong input"
        })
    }
    else{
        next();
    }
}

app.use(express.json());

app.get('/health-check', userCheck, kidneyCheck, (req, res) => {
    //usercheck and kidneycheck
    //logic to test healthy heart
    res.send('your heart is healthy!');
});

app.post('/kidney-check', userCheck, (req, res) => {
    const kidneys = req.body.kidneys;
    //here we need to do some input validation checks
    //since what if user inputs a number insted of an array
    //or any gibberish, therefore we need to have input validation checks
    //this can be done better by ZOD middlewares
    const kidneyLength = kidneys.length;

    res.send(`you have ${kidneyLength} kidneys`);
});

//to handle errors we have another middleware which uses 4 inputs
//global catches

app.use((err, req, res, next) => {
    res.json({
        msg:"something is up with the server"
    })
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}/health-check`);
});