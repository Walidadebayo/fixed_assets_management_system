const User = require("../Models/user")


 const  login = (req, res)=>{
    res.render('login')
 }
//  post access
 const getLogin =  async (req, res)=>{
   try {
      let {email, password} = req.body;
      let user = await User.login(email, password)
      if(user){
         req.session.user = user;
         console.log(req.path);
         res.redirect(req?.session?.intent || '/home');
         req.flash("success","welcome" + user)
      }else{
         res.redirect("back")
         req.flash("error", "invalid Email or Password")
      }
   } catch (error) {
      console.log(error)
   }
 } 
//  end post login

 const creatAccount = (req, res)=>{
    res.render('create_account')
 } 
 const newUser = async (req, res)=>{
    try {
        let user = new User(req.body)
        await user.save()
        console.log(user);
        res.redirect("/")
    } catch (error) {
        console.log(error.status);
        res.render("error")
    }
 }
 module.exports = {login, creatAccount, newUser, getLogin }