
const queryRegister = require('../models/register.model.js');

class TodolistController {
    get(req,res) {
        res.render('register');
    }
    post(req,res) {
        const username = req.body.username;
        const password = req.body.password;
        const retypepassword = req.body.retypepassword;
        if(username && password && retypepassword) {
            queryRegister.isUsernameExist(username, (status) => {
                if(status == false) {
                    if(password === retypepassword) {
                        queryRegister.addUser(username,password);
                        res.render('register', {
                            status: true,
                            label: "Register success !"
                        });
                    }
                    else {
                        res.render('register', {
                            status: false,
                            label: "Retype password and password are not match !"
                        });
                    }
                }
                else {
                    res.render('register', {
                        status: false,
                        label: "Username is already exist !"
                    });
                }
            });
        }
        else {
            res.render('register', {
                status: false,
                label: "Input something !"
            });
        }
    }
    
}

module.exports = new TodolistController;