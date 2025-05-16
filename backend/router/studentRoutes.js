const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

router.get('/', studentController.exportAllStudents);
router.get('/:id', studentController.exportStudentById);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.exportDeleteStudent);
router.get('/email/:email', studentController.exportStudentByEmail);
router.get('/name/:name', studentController.exportStudentByName);
router.get('/phone/:phone', studentController.exportStudentByPhone);

module.exports = router;
