const router = require('express').Router()
const { authMiddleware } = require('../../middleware/authMiddleware')
const supervisorController = require('../../Controller/dashboard/SupervisorController')

router.get('/request-seller-get',authMiddleware, supervisorController.get_supervisor_request)

router.get('/get-sellers',authMiddleware,supervisorController.get_active_supervisor)
router.get('/get-deactive-sellers',authMiddleware, supervisorController.get_deactive_supervisor)

router.get('/get-seller/:sellerId',authMiddleware,supervisorController.get_supervisor)
router.post('/seller-status-update',authMiddleware, supervisorController.supervisor_status_update)

module.exports = router