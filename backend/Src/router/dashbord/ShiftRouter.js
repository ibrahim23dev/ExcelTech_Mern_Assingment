const router = require('express').Router()
const { authMiddleware } = require('../../middleware/authMiddleware')
const ShiftController = require('../../Controller/dashboard/ShiftController')

// Set up Cloudinary configuration
router.post('/category-add', authMiddleware, ShiftController.add_shift)
router.get('/category-get', authMiddleware, ShiftController.get_shift);
module.exports = router













