const router = require('express').Router()
const { authMiddleware } = require('../middleware/authMiddleware')
const authControllers = require('../Controller/authController')
router.post('/admin-login', authControllers.adminlogin)
router.get('/get-user', authMiddleware, authControllers.getUser)
router.post('/seller-register', authControllers.seller_register)
router.post('/seller-login', authControllers.seller_login)
router.post('/profile-image-upload',authMiddleware, authControllers.profile_image_upload)
router.post('/profile-info-add',authMiddleware, authControllers.profile_info_add)
router.get('/logout',authMiddleware,authControllers.logout)

module.exports = router