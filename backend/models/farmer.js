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
    jobtitle:{type:String, require:true, maxlength:200 },
    position:{type:String, require:true, maxlength:100 },
    hqualification:{type:String, require:true, maxlength:100 },
    picture:{type:String, require:true, maxlength:200 },
    utilitybill:{type:String, require:true, maxlength:200 },
    nationality:{type:String, require:true, maxlength:200 },
    state:{type:String, require:true, maxlength:200 },
    lga:{type:String, require:true, maxlength:200 },
    email:{type:String, require:true, maxlength:300 },
    dob:{type:String, require:true, maxlength:200 },
    nofkinphone:{type:String, require:true, maxlength:200 },
    nofkin:{type:String, require:true, maxlength:200 },
    nofkinaddress:{type:String, require:true, maxlength:300 },
    raddress:{type:String, require:true, maxlength:200 },
    timeStamp:true
})

const consultantModel = mongoose.Model('consultant',consultantSchema)
module.exports = consultantModel

