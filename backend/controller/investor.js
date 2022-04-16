const investorModel = require('.../models/investor')

const investorIndex =(req, res)=>{

    try{
        const data = req.body.data

        res.status(200).json(data)
    
    }catch(err){
       res.json(err)
    }
   
}

const createInvestor = (req, res)=>{

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


    const investorTable = new investorModel({
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

    investorTable.save()
    .then(()=>{res.status(200).json({message:"New investor is created successfully !"})})
    .catch((err)=>{res.json({error:err})})
}

const editInvestor = (req,res) =>{
    let id = req.params.id

    investorModel.findById(id).then((data)=>{
           data.title = req.body.title
           data.author  = req.body.title
           data.description = req.body.description

           data.save()
           .then(()=>{res.status(200).json({message:'investor is updated, succesfully!'})})
           .catch((err)=>{res.json({err})})
    })
    .catch((err)=>{res.json({error:err})})
}

const removeInvestor =(req,res) =>{
      
    let id = req.params.id

    investorModel.findByIdAndDelete(id) 
    .then(()=>{res.status(200).json({message:`investor with id ${id} has been removed successfuly`})})
    .catch((err)=>{res.json({error:err})})
}

module.exports ={
    createInvestor,
    editInvestor,
    removeInvestor,
    investorIndex
}