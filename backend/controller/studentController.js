const studentModel = require('../models/studentModel');



const studentController = {

   exportAllStudents: (req, res) => {
    studentModel.getAllStudents((err, results) => {
         if (err) {
            return res.status(500).json({ error: 'Error fetching students' });
         }
         res.json(results);
      });
   }
    ,

    exportStudentById: (req, res) => {
        const studentId = req.params.id;
        studentModel.getStudentById(studentId, (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error fetching student' });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.json(results[0]);
        });
    },

    createStudent: (req, res) => {
        const newStudent = req.body;
        studentModel.createStudent(newStudent, (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error creating student' });
            }
            res.status(201).json({ id: results.insertId, ...newStudent });
        });
    },

    updateStudent: (req, res) => {
        const studentId = req.params.id;
        const updatedStudent = req.body;
        studentModel.updateStudent(studentId, updatedStudent, (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error updating student' });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.json({ id: studentId, ...updatedStudent });
        });
    },

    exportDeleteStudent: (req, res) => {
        const studentId = req.params.id;
        studentModel.deleteStudent(studentId, (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error deleting student' });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.status(204).send();
        });
    },
    exportStudentByEmail: (req, res) => {
        const email = req.params.email;
        studentModel.getStudentByEmail(email, (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error fetching student' });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.json(results[0]);
        });
    },

    exportStudentByName: (req, res) => {
        const name = req.params.name;
        studentModel.getStudentByName(name, (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error fetching student' });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.json(results[0]);
        });
    },
    exportStudentByPhone: (req, res) => {
        const phone = req.params.phone;
        studentModel.getStudentByPhone(phone, (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error fetching student' });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.json(results[0]);
        });
    },


}
module.exports = studentController;

