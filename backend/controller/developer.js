       const developerModel = require('.../models/developer')



const developerIndex =(req, res)=>{

        try{
            const data = req.body.data
    
            res.status(200).json(data)
        
        }catch(err){
           res.json(err)
        }
       
    }
const createDeveloper = (req, res)=>{

    let title = req.body.title
    let author = req.body.title
    let description = reg.body.description

    const developerTable = new developerModel({
        title,
        author,
        description
    })

    developerTable.save()
    .then(()=>{res.status(200).json({message:"New data saved in to Developer doc table"})})
    .catch((err)=>{res.json({error:err})})
}

const editDeveloper = (req,res) =>{
    let id = req.params.id

    developerModel.findById(id).then((data)=>{
           data.title = req.body.title
           data.author  = req.body.title
           data.description = req.body.description

           data.save()
           .then(()=>{res.status(200).json({message:'Developer doc table is updated, succesfully!'})})
           .catch((err)=>{res.json({err})})
    })
    .catch((err)=>{res.json({error:err})})
}

const removeDeveloper =(req,res) =>{
      
    let id = req.params.id

    developerModel.findByIdAndDelete(id) 
    .then(()=>{res.status(200).json({message:`Developer doc with id ${id} has been removed successfuly`})})
    .catch((err)=>{res.json({error:err})})
}

module.exports ={
    createDeveloper,
    editDeveloper,
    removeDeveloper,
    developerIndex
}