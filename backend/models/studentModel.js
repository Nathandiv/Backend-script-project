const db = require('../config/db');
const studentModel = {

    getAllStudents: (callback) => 
    {
        db.query('SELECT * FROM students', callback);
    },

    getStudentById: (id, callback) => 
    {
        db.query('SELECT * FROM students WHERE id = ?', [id],callback );
    },
    createStudent: (student, callback) => 
    {
        db.query('INSERT INTO students SET ?', student, callback);
    },

};