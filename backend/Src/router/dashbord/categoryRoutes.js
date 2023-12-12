const router = require('express').Router()
const { authMiddleware } = require('../../middleware/authMiddleware')
const categoryController = require('../../Controller/dashboard/categoryController');

router.post('/category-add', authMiddleware, categoryController.addCategory)
router.get('/category-get', authMiddleware, categoryController.getCategory)

module.exports = router