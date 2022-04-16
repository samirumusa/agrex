const mongoose = require('mongoose')

const Schema = mongoose.Schema

const consultantSchema = new Schema({
    title:{type:String, require:true, maxlength:100 },
    firstname:{type:String, require:true, maxlength:100 },
    secondname:{type:String, require:true, maxlength:100 },
    lastname:{type:String, require:true, maxlength:100 },
    idtype:{type:String, require:true},
    idno:{type:Number, require:true, maxlength:100 },
    phone:{type:Number, require:true, maxlength:100 },
    organisation:{type:String, require:true, maxlength:200 },
    position:{type:String, require:true, maxlength:100 },
    grade:{type:String, require:true, maxlength:100 },
    hqualification:{type:String, require:true, maxlength:100 },
    nationality:{type:String, require:true, maxlength:100 },
    state:{type:String, require:true, maxlength:100 },
    lga:{type:String, require:true, maxlength:100 },
    email:{type:String, require:true, maxlength:200 },
    picture:{type:String, require:true, maxlength:200 },
    address:{type:String, require:true, maxlength:200 },
    timeStamp:true
})

const consultantModel = mongoose.Model('consultant',consultantSchema)

module.exports = consultantModel