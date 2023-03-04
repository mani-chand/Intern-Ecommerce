const express = require('express')
const router = express.Router()
const {addCustomer} = require("./../Controllers/electronicControllers.js")
const {addNewCustomer} = require("./../Controllers/toysControllers.js")
router.get('/',(req, res)=>{
    res.send("hello world")
})
router.post('/AddElectronicCustomer',addCustomer)
router.post('/addToyCustomer',addNewCustomer)
module.exports = router;