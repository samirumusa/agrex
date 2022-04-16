       const reportModel = require('.../models/report')

 const reportIndex =(req, res)=>{

        try{
            const data = req.body.data
    
            res.status(200).json(data)
        
        }catch(err){
           res.json(err)
        }
       
    }
const createReport = (req, res)=>{

    let title = req.body.title
    let author = req.body.title
    let location = req.body.location
    let description = reg.body.description

    const reportTable = new reportModel({
        title,
        author,
        location,
        description
    })

    reportTable.save()
    .then(()=>{res.status(200).json({message:"New data saved in to report table"})})
    .catch((err)=>{res.json({error:err})})
}

const editReport = (req,res) =>{
    let id = req.params.id

    reportModel.findById(id).then((data)=>{
           data.title = req.body.title
           data.author  = req.body.author
           data.location  = req.body.location
           data.description = req.body.description

           data.save()
           .then(()=>{res.status(200).json({message:'Report table is updated, succesfully!'})})
           .catch((err)=>{res.json({err})})
    })
    .catch((err)=>{res.json({error:err})})
}

const removeReport =(req,res) =>{
      
    let id = req.params.id

    reportModel.findByIdAndDelete(id) 
    .then(()=>{res.status(200).json({message:`Report with id ${id} has been removed successfuly`})})
    .catch((err)=>{res.json({error:err})})
}

module.exports ={
    createReport,
    editReport,
    removeReport,
    reportIndex
}