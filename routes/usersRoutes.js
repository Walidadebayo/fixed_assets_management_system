const {Router} = require('express')
const { addAssets, getProfile, getAsset, getHome } = require('../controller/assetController');
const { addRenters, getRenters, saveRenter } = require('../controller/renterController');
const { getDepreciate } = require('../controller/depreciationController');
const { getProfit } = require('../controller/profitController');
const { getRemind } = require('../controller/remiderController');
const {  creatAccount, newUser } = require('../controller/userController');
const user = Router ();
// console.log(Router);



// create account handleler
user.get('/create-account', creatAccount)
user.post('/create-account', newUser)

user.get("/add-asset", addAssets)

user.get("/add-renter", addRenters)
user.post("/add-renter", saveRenter)

user.get("/renters", getRenters)

user.get("/assets", getAsset)

user.get('/home', getHome )
    
user.get('/profile', getProfile)

user.get("/depreciate", getDepreciate)

user.get("/profit", getProfit)

user.get("/reminder", getRemind)

// export part
module.exports = user;