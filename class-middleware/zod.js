//run 'npm install zod' in the terminal
const express = require('express');
const zod = require('zod');   //import zod

const app = express();
const port = 3002;

const schema = zod.array(zod.number());
/*

********||example ZOD schema||********
let obj = {
     email: string,
     password: 8 number,
     country: india(IN) or usa(US)
}

const schema = zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
    country:zod.literal("IN").or(zod.literal("US"))
})

*/

app.use(express.json());   //middleware

app.post('/num-kidneys', (req, res) => {

    const kidney = req.body.kidney;
    // const kidneynum = kidney.length;

    const response = schema.safeParse(kidney);

    if(!response.success){
        res.status(400).json({
            msg: "invalid input"
        })
    }

        res.send(`you have ${kidney} kidneys`);
    

});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}/num-kidneys`);
});