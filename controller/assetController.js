const Fixedassets = require("../Models/fixedAssets");

const addAssets = ((req, res)=>{
    res.render('add-asset.ejs');
})
 const getAsset = ((req, res)=>{
    res.render("fixed_assets")
 })

const getHome = ((req, res)=>{
    console.log("session",req.session.user);
    res.render('index.ejs')
})

const getProfile =  ((req, res)=>{
    res.render('profile.ejs')

})
module.exports ={addAssets, getHome, getProfile, getAsset}