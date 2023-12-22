const router = require('express').Router()
const { authMiddleware } = require('../../middleware/authMiddleware')
const CategoryController = require('../../Controller/dashboard/categoryController')

// Set up Cloudinary configuration
router.post('/category-add', authMiddleware, CategoryController.add_category)
router.get('/category-get', authMiddleware, CategoryController.get_category);
module.exports = router













