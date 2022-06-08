
//express config
const express = require('express');
const app = express();

const path = require('path');

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//bodyParser config
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//handlebar config
const { engine } = require('express-handlebars');
app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

//router config
const route = require('./routes/route.js');
route(app);

//server run at port 3000
app.listen(3000, () => {
    console.log(`listening at port 3000`);
});

//create table in mysql if it not exist
const createTable = require('./models/createTable.js');
createTable();
