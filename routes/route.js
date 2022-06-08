
function route(app) {
    //index page
    const indexController = require("../controllers/index.controller.js");
    app.get('/', indexController.get);
    
    //login page
    const loginController = require("../controllers/login.controller.js");
    app.get('/login', loginController.get);
    app.post('/login', loginController.post);
    
    //register page
    const registerController = require("../controllers/register.controller.js");
    app.get('/register', registerController.get);
    app.post('/register', registerController.post);
}

module.exports = route;