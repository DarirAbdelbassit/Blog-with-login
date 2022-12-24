const express=require("express")
const {loginGet,loginChecker,logout }=require("../controllers/loginController")

const router=express.Router();

// les routes post
router.get("/login", loginGet);
router.post("/login", loginChecker);
router.get("/logout",logout);

module.exports=router