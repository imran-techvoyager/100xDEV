const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}/sum`);
});