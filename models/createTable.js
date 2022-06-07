const db = require('../configs/mysql.js');

function isTableExist() {
    db.query('SHOW TABLES LIKE ?', ['account'], function(_,result,err) {
        if(result.length > 0) {
            console.log('Table is exist');
        }
        else {
            db.query('CREATE TABLE ? (? INT NOT NULL AUTO_INCREMENT,? VARCHAR(45) NOT NULL,? VARCHAR(45) NOT NULL,PRIMARY KEY (?),UNIQUE INDEX ? (? ASC) VISIBLE,UNIQUE INDEX ? (? ASC) VISIBLE)',['account','id','username','password','id','id_UNIQUE', 'id','username_UNIQUE','username']);
        }
    });
}
module.exports = isTableExist;