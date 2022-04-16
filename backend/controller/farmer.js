const farmerModel = require('.../models/farmer')


const farmerIndex =(req, res)=>{

    try{
        const data = req.body.data

        res.status(200).json(data)
    
    }catch(err){
       res.json(err)
    }
   
}
const createFarmer = (req, res)=>{

    let title = req.body.title
    let firstname= req.body.firstname
    let secondname= req.body.secondname
    let lastname = req.body.lastname
    let idtype = req.body.idtype
    let idno = req.body.idno
    let phone = req.body.phone
    let jobtitle = req.body.jobtitle
    let position = req.body.position
    let hqualification = req.body.hqualification
    let picture = req.body.picture
    let utilitybill = req.body.utilitybill
    let nationality = req.body.nationality
    let state = req.body.state
    let lga = req.body.lga
    let email = req.body.email
    let dob = req.body.dob
    let nofkinphone = req.body.nofkinphone
    let nofkin = req.body.nofkin
    let nofkinaddress = req.body.nofkinaddress
    let raddress = req.body.raddress


    const farmerTable = new farmerModel({
        title,
        firstname,
        secondname,
        lastname,
        idtype,
        idno,
        phone,
        jobtitle,
        position,
        hqualification,
        picture,
        utilitybill,
        nationality,
        state,
        lga,
        email,
        dob,
        nofkinphone,
        nofkin,
        nofkinaddress,
        raddress
    })

    farmerTable.save()
    .then(()=>{res.status(200).json({message:"New farmer is created successfully !"})})
    .catch((err)=>{res.json({error:err})})
}

const editFarmer = (req,res) =>{
    let id = req.params.id

       farmerModel.findById(id).then((data)=>{
            data.title = req.body.title
            data.firstname= req.body.firstname
            data.secondname= req.body.secondname
            data.lastname = req.body.lastname
            data.idtype = req.body.idtype
            data.idno = req.body.idno
            data.phone = req.body.phone
            data.jobtitle = req.body.jobtitle
            data.position = req.body.position
            data.hqualification = req.body.hqualification
            data.picture = req.body.picture
            data.utilitybill = req.body.utilitybill
            data.nationality = req.body.nationality
            data.state = req.body.state
            data.lga = req.body.lga
            data.email = req.body.email
            data.dob = req.body.dob
            data.nofkinphone = req.body.nofkinphone
            data.nofkin = req.body.nofkin
            data.nofkinaddress = req.body.nofkinaddress
            data.raddress = req.body.raddress

           data.save()
           .then(()=>{res.status(200).json({message:'Farmer is updated, succesfully!'})})
           .catch((err)=>{res.json({err})})
    })
    .catch((err)=>{res.json({error:err})})
}

const removeAccount =(req,res) =>{
      
    let id = req.params.id

    farmerModel.findByIdAndDelete(id) 
    .then(()=>{res.status(200).json({message:`A farmer with id ${id} has been removed successfuly`})})
    .catch((err)=>{res.json({error:err})})
}

module.exports ={
    createFarmer,
    editFarmer,
    removeFarmer,
    farmerIndex
}