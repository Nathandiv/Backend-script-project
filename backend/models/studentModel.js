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
    },

    getStudentById: (id, callback) => 
    {
        db.query('SELECT * FROM students WHERE id = ?', [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            return callback(results[0]);
        });
    },
    createStudent: (student, callback) => 
    {
        db.query('INSERT INTO students SET ?', student, (err, results) => {
            if (err) {
                return callback(err);
            }
            return callback(results.insertId);
        });
    },

};