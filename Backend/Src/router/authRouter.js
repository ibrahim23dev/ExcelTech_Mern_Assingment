const express = require('express');
//const mongoose=require('mongoose')
const router = express.Router();
const authController = require('../Controller/authController');
//const {Authmiddleware} = require('../middleware/authMiddleware');
//rest api

router.post('/adminlogin', authController.adminlogin);
router.get('/get-user', authController.getUser);

module.exports = router;