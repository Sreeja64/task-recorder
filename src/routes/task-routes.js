var express = require('express');
var router = express.Router();
const {taskController} = require('../controllers')

router.get('/fetchAllTasks', taskController.fetchAllTasks);

router.get('/fetchActiveTasks', taskController.fetchActiveTasks);

router.post('/addTask', taskController.addTask);

router.put('/toggleStatus/:id/',taskController.toggleStatus);

router.delete('/deleteTask/:id/', taskController.deleteTask);

module.exports = router;
