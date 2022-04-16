const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reportSchema = new Schema({
    title:{type:String, require:true, maxlength:100 },
    description:{type:String, require:true},
    location:{type:String, require:true},
    
}, {
    timeStamp:true})

const reportModel = mongoose.model('report',reportSchema)

module.exports = reportModel