const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')

app.use(bodyParser.json());
app.use('/admin', adminRouter);
app.use('/user', userRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`server running on http://localhost${port}`);
})