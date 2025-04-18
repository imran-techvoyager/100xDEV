const { User } = require('../db/index');

//middleware to handle auth

function userMiddleware(req, res, next){

      const username = req.headers.username;
      const password = req.headers.password;

      User.findOne({
        username : username,
        password : password
      })
      .then((value) => {
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "user doesnt exist"
            })
        }
      })

}

module.exports = userMiddleware;