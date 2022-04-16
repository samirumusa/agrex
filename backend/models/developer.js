const mongoose = require('mongoose')

const Schema = mongoose.Schema

const developerSchema = new Schema({
    title:{type:String, require:true, maxlength:100 },
    description:{type:String, require:true},
    author:{type:String, require:true},
    
}, {
    timeStamp:true})

const developerModel = mongoose.model('developer',developerSchema)

module.exports = developerModel