
//requirements
const express=require('express');
const session=require('express-session');
const app=express();
//utiliser les middleware nissecaires
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:true
    }))
//Definition des routes
app.use('/',require('./routes/loginRoutes'));
app.use("/posts",isLogged, require("./routes/postRoutes"));
function isLogged(req,res,next){
    if(req.session.user){
        next(); 
    }else{
        res.redirect("/login");
    }
}
module.exports=app
