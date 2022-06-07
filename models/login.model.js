
const db = require('../configs/mysql.js');

class QueryLogin {
    isUserExist(username,password, callback) {
        db.query('SELECT id FROM account WHERE username = ? AND password = ?', [username, password], function(err, results) {
            if(results.length > 0) {
                callback(true);
            }
            else {
                callback(false);
            }
        });
    }
}

module.exports = new QueryLogin;