const consultantModel = require('.../models/consultant')

const consultantIndex =(req, res)=>{

    try{
        const data = req.body.data

        res.status(200).json(data)
    
    }catch(err){
       res.json(err)
    }
   
}
const createConsultant = (req, res)=>{

    let title = req.body.title
    let firstname = req.body.firstname
    let secondname = req.body.secondname
    let lastname = req.body.lastname
    let idtype = req.body.idtype
    let idno = req.body.idno
    let phone = req.body.phone
    let organisation = req.body.organisation
    let position = req.body.position
    let hqualification = req.body.hqualification
    let grade = req.body.grade
    let picture = req.body.picture
    let nationality = req.body.nationality
    let state = req.body.state
    let lga = req.body.lga
    let email = req.body.email
    let raddress = req.body.raddress


    const consultantTable = new consultantModel({
        title,
        firstname,
        secondname,
        lastname,
        idtype,
        idno,
        phone,
        position,
        grade,
        organisation,
        hqualification,
        picture,
        nationality,
        state,
        lga,
        email,
        raddress
    })

    consultantTable.save()
    .then(()=>{res.status(200).json({message:"New consultant is created successfully !"})})
    .catch((err)=>{res.json({error:err})})
}

const editConsultant = (req,res) =>{
    let id = req.params.id

    consultantModel.findById(id).then((data)=>{
           data.title = req.body.title
           data.author  = req.body.title
           data.description = req.body.description
           data.title = req.body.title
           data.firstname= req.body.firstname
           data.secondname= req.body.secondname
           data.lastname = req.body.lastname
           data.idtype = req.body.idtype
           data.idno = req.body.idno
           data.phone = req.body.phone
           data.organisation = req.body.organisation
           data.position = req.body.position
           data.hqualification = req.body.hqualification
           data.grade = req.body.grade
           data.picture = req.body.picture
           data.nationality = req.body.nationality
           data.state = req.body.state
           data.lga = req.body.lga
           data.email = req.body.email
           data.raddress = req.body.raddress

           data.save()
           .then(()=>{res.status(200).json({message:'Consultant is updated, succesfully!'})})
           .catch((err)=>{res.json({err})})
    })
    .catch((err)=>{res.json({error:err})})
}

const removeConsultant =(req,res) =>{
      
    let id = req.params.id

    consultantModel.findByIdAndDelete(id) 
    .then(()=>{res.status(200).json({message:`A consultant with id ${id} has been removed successfuly`})})
    .catch((err)=>{res.json({error:err})})
}

module.exports ={
    createConsultant,
    editConsultant,
    removeConsultant,
    consultantIndex
}