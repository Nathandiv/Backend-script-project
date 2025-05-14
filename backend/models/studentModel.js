const db = require('../config/db');
const studentModel = {

    getAllStudents: (callback) => 
    {
        db.query('SELECT * FROM students', (err, results) => {
            if (err) {
                return callback(err);
            }
            return callback(results);
        });
    }

};