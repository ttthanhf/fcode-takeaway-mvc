const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const { engine } = require('express-handlebars');
app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

const route = require('./routes/route.js');
route(app);

app.listen(3000, () => {
    console.log(`listening at port 3000`);
});

const createTable = require('./models/createTable.js');
createTable();
