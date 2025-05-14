const studentModel = require('../model/studentModel');


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

    

    

}