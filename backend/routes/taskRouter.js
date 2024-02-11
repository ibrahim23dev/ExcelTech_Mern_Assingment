const router = require('express').Router();

const { authMiddleware } = require('../middlewares/authMiddleware');
const TaskController = require('../controllers/taskcontroller')

router.post('/create-tasks', authMiddleware, TaskController.createTask);
router.get('/get-task', authMiddleware, TaskController.getTasks);
router.get('/get-task/:id', authMiddleware, TaskController.getTaskById);
router.delete('/delete-task/:id', authMiddleware, TaskController.deleteTask);
router.get('/update-status/:id/:status', authMiddleware, TaskController.updateTaskStatus);
router.get('/list-status/:status', authMiddleware, TaskController.listTaskStatus);

module.exports = router;