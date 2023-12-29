const router = require('express').Router()
const { authMiddleware } = require('../../middleware/authMiddleware')
const EmployeeController = require('../../Controller/dashboard/EmployeeController')

router.post('/product-add', authMiddleware, EmployeeController.add_employee)
router.get('/products-get', authMiddleware, EmployeeController.employee_get)
//router.get('/product-get/:productId', authMiddleware, productController.product_get)
//router.post('/product-update', authMiddleware, productController.product_get)
//router.post('/product-image-update', authMiddleware, productController.product_image_update)

module.exports = router