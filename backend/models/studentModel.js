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
    updateStudent: (id, student, callback) => 
    {
        db.query('UPDATE students SET ? WHERE id = ?', [student, id], callback);
    },

    deleteStudent: (id, callback) => 
    {
        db.query('DELETE FROM students WHERE id = ?', [id], callback);
    },
    getStudentByEmail: (email, callback) => 
    {
        db.query('SELECT * FROM students WHERE email = ?', [email], callback);
    },
  
    getStudentByName: (name, callback) => 
    {
        db.query('SELECT * FROM students WHERE name = ?', [name], callback);
    },
    getStudentByPhone: (phone, callback) => 
    {
        db.query('SELECT * FROM students WHERE phone = ?', [phone], callback);
    },

};

module.exports = studentModel;