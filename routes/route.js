const loginController = require("../controllers/login.controller.js");
const registerController = require("../controllers/register.controller.js");

function route(app) {
    app.get('/', function(req,res) {
        res.render('index');
    });
    
    app.get('/login', loginController.get);
    app.post('/login', loginController.post);
    
    app.get('/register', registerController.get);
    app.post('/register', registerController.post);
}

module.exports = route;