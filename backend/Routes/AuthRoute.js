const { Signup,Login, userVerification} = require("../controllers/authController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
//chatgpt 
router.post('/verify',userVerification);
module.exports = router;
