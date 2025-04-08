const express = require('express');

const adminMiddleware = require('../middlewares/admin');

const router = express.Router();

const { Admin, Course } = require('../db')


router.post('/signup', (req, res) => {
       
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username: username,
        password: password
    })
    .then(() => {
        res.json({
            msg: "admin created"
        })
    })
        .catch(()=>{
            res.json({
            msg: "admin not created"
        })
    })
})

router.post('/courses', adminMiddleware, async (req, res) => {
         const title = req.body.title;
         const description = req.body.description;
         const imglink = req.body.imglink;
         const price = req.body.price;

        const newCourse = await Course.create({
            title,
            description,
            imglink,
            price
        })

        res.json({
            msg: 'course created sucessfully', courseId: newCourse._id
        })
})

router.get('/courses', adminMiddleware, async (req, res) => {
        // Course.find({})
        // .then((response)=>{
        //     res.json({
        //         courses: response
        //     })
        // })
      const response = await Course.find({});
      res.json({
        courses: response
      })
})

module.exports = router;