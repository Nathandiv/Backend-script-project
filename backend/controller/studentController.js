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
    

}