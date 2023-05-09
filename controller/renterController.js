const Renters = require("../Models/renters")

Renters
const addRenters = ((req, res)=>{
    res.render("add-renter")
})
const getRenters = ((req, res)=>{
    res.render("renter")
});

const saveRenter = async (req, res)=>{
    let renter = new Renters(req.body);
    await renter.save()
    console.log(renter);
}
module.exports = {addRenters, getRenters, saveRenter}