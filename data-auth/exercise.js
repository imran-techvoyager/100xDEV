const express = require('express');
//npm install jsonwebtoken
const jwt = require("jsonwebtoken");   //importing json web token
const jwtpass = "123456";

const app = express();

const all_Users = [{
    name: "imran",
    username: "imran@2025",
    password: "12345"
},
{
    name: "aman",
    username: "aman@2025",
    password: "67891"
},
{
    name: "vishnu",
    username: "vishnu@2025",
    password: "11121"
}]

function userExist(username, password){
    let userExist = false;
    for (let i = 0; i < all_Users.length; i++) {
        if(all_Users[i].username == username && all_Users[i].password == password){
            userExist = true;
        }
    }

    return userExist;
}

const port = 3000;

app.use(express.json());

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExist(username, password)){
       return res.status(403).json({
            msg: "user doesnt exist in db"
        });
    }

    var token = jwt.sign({username: username}, jwtpass);

    return res.json({
         token,
    });
});

app.get('/users', (req, res) => {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, jwtpass);
    const username = decode.username;

    res.json({
        user: all_Users.filter((value) => {
            if(value.username == username){
                return true;
            }else{

                return false;
            }
        })
    })
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}/`)
});