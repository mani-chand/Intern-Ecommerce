const toysModel = require("../Model/toysMode.js")
exports.addNewCustomer = async(req,res)=>{
    try {
        const newCustomer = req.body
        console.log(req.body)
        const result = await toysModel(newCustomer).save()
        console.log(result)
        return res.send(result)
    } catch (error) {
        return res.status(400)
    }
}