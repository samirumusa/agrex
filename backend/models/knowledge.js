const mongoose = require('mongoose')

const Schema = mongoose.Schema

const knowledgeSchema = new Schema({
    title:{type:String, require:true, maxlength:100 },
    description:{type:String, require:true},
    author: {type:String, require:false},
    timeStamp:true
})

const knowledgeModel = mongoose.Model('knowledge',knowledgeSchema)

module.exports = knowledgeModel