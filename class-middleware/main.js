const express = require('express');
const app = express();
const port = 3000;

app.get('/health-checkups', (req, res) => {
    //health check logic kidney's
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;
    
    if(username != "imrantechvoy" || password != "pass"){
          res.status(400).json({
            msg: "wrong username or password"
          });
    }
    if(kidneyId != 1 && kidneyId != 2){
          res.status(400).json({
            msg: "invalid input"
          });
    }


    res.send("your heart is healthy!");
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}/health-checkups`);
});