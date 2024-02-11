const router = require("express").Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const AuthControllers = require("../controllers/authControllers");

router.post("/user-register", AuthControllers.user_register);
router.post("/user-login", AuthControllers.user_login);
router.get("/logout", authMiddleware, AuthControllers.logout);

module.exports = router;
