
const User = require("../models/user/userModel");
let message='';

function loginGet(req,res){
    if(req.session.user)
        res.redirect('/posts')
    else{
        message= req.session.error && 'waaaaaaaa khouna';
        req.session.error = false;
        res.render('login',{message});
    }
}
async function loginChecker(req,res){
   message='';
   const user =  await User.findOne({username:req.body.username,password:req.body.password})
   if(user){
    req.session.user = user;
    res.redirect('/posts');
   }else{
    req.session.error=true;
    res.redirect('/login')
   }
}
function logout(req,res){
    req.session.destroy();
    res.redirect('/login');
}
module.exports= {loginGet,loginChecker,logout};