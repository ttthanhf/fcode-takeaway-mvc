


class LoginController {
    get(req,res) {
        res.render('login');
    }
    post(req,res) {
        const username = req.body.username;
        const password = req.body.password;
        if(username && password) {

            const queryLogin = require('../models/login.model.js');
            queryLogin.isUserExist(username,password, (status) => {
                
                if(status) {
                    res.render('login', {
                        status: true,
                        label: "Login success !"
                    });
                }
                else {
                    res.render('login', {
                        status: false,
                        label: "Incorrect username or password !"
                    });
                }
            });
        }
        else {
            res.render('login', {
                status: false,
                label: "Input something !"
            });
        }
    }
}

module.exports = new LoginController;