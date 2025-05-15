const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

router.get('/students', studentController.exportAllStudents);
router.get('/students/:id', studentController.exportStudentById);
router.post('/students', studentController.createStudent);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.exportDeleteStudent);
router.get('/students/email/:email', studentController.exportStudentByEmail);
router.get('/students/name/:name', studentController.exportStudentByName);
router.get('/students/phone/:phone', studentController.exportStudentByPhone);


module.exports = router;
