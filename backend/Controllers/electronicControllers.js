const customerModel = require("../Model/eletronicModel.js")
exports.addCustomer = async(req,res)=>{
    try {
        const newCustomer = req.body
        console.log(req.body)
        const result = await customerModel(newCustomer).save()
        console.log(result)
        return res.send(result)
    } catch (error) {
        return res.status(400)
    }
}