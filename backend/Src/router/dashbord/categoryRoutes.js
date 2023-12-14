const router = require('express').Router()
const { authMiddleware } = require('../../middleware/authMiddleware')
const CategoryController = require('../../Controller/dashboard/categoryController')

router.post('/categoryadded', authMiddleware, CategoryController.add_category);
router.get('/categorygeted', authMiddleware, CategoryController.get_category);
module.exports = router