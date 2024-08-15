const express = require('express')
const router = express.Router()
const { newTask, allTasks, getTask, updateTask, deleteTask } = require('../controllers/tasks')

router.get('/', allTasks)
router.post('/', newTask)

router.get('/:id', getTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router