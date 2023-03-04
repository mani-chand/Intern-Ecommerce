const mongoose = require('mongoose')
const eletronicSchema = new mongoose.Schema({
    name:{type:String},
    phone:{type:Number},
    dateofbirth:{type:Date},
    },
    {
        strict: false
    }
)
module.exports= new mongoose.model('customer',eletronicSchema)