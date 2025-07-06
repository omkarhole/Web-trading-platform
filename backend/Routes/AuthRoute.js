const { Signup,Login, userVerification} = require("../controllers/authController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
//chatgpt
router.get('/verify',userVerification);

// router.post('/',userVerification);
module.exports = router;
