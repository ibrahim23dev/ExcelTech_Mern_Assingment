const router = require('express').Router()
const { authMiddleware } = require('../../middlewares/authMiddleware')
const taskController = require('../../controllers/TaskController/TaskController')

router.post('/create-task', authMiddleware, taskController.create_task);
router.get('/read-task', authMiddleware, taskController.get_task);
//router.get('/product-get/:productId', authMiddleware, productController.product_get)
//router.post('/update-task', authMiddleware, productController.product_update)


module.exports = router