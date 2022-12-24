const express=require("express")
const {getPosts,getPost,addPost,updatePost,editPost,deletePost }=require("../controllers/postsController")

const router=express.Router();

// les routes post
router.get("/",getPosts);
router.get("/post/:id",getPost);
router.post("/store",addPost);
router.get('/delete/:id',deletePost);
router.get("/edit",editPost);
router.get("/edit/:id",editPost);
router.post("/update/:id",updatePost);
module.exports=router