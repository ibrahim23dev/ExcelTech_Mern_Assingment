const router = require('express').Router()
const { authMiddleware } = require('../middlewares/authMiddleware');
const authControllers = require('../controllers/authControllers')

router.post('/user-register', authControllers.user_register)
router.post('/user-login', authControllers.user_login)
router.get('/logout',authMiddleware,authControllers.logout)

module.exports = router;