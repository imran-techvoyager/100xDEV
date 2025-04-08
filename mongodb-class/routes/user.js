const express = require('express');

const userMiddleware = require('../middlewares/user');

const router = express.Router();

const { User, Course } = require('../db')

// User Routes
router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = await User.create({
        username,
        password
    })

    res.json({
        msg: "user created sucessfully", userId: newUser.username
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const username = req.headers.username;
    const password = req.headers.password;

    const allCourses = await Course.find({})

    res.json({
        "all courses": allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

   await User.updateOne({
        username : username
    },{
        "$push":{
            purchasedCourses: courseId
        }
    })

    res.json({
        msg: "purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router;