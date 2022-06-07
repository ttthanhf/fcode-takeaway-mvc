const db = require('../configs/mysql.js');

function createTableIfItNotExist() {
    db.query('SHOW TABLES LIKE ?', ['account'], function(_,result,err) {
        if(result.length > 0) {
            console.log('Table is exist');
        }
        else {
            db.query('CREATE TABLE `account` (`id` INT NOT NULL AUTO_INCREMENT,`username` VARCHAR(45) NOT NULL,`password` VARCHAR(45) NOT NULL,PRIMARY KEY (`id`),UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);')
        }
    });
}

module.exports = createTableIfItNotExist;