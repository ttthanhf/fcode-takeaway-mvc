
const db = require('../configs/mysql.js');

class QueryRegister {
    isUsernameExist(username, callback) {
        db.query('SELECT * FROM account WHERE username = ?', [username], function(err, results) {
            if(results.length > 0) {
                callback(true);
            }
            else {
                callback(false);
            }
        });
    }
    addUser(username, password) {
        db.query("INSERT INTO account(username, password) VALUES (?,?)", [username, password]);
    }
}

module.exports = new QueryRegister;