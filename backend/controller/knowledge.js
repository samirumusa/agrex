       const knowledgemodel = require('.../models/knowledge')




const knowledgeIndex =(req, res)=>{

        try{
            const data = req.body.data
    
            res.status(200).json(data)
        
        }catch(err){
           res.json(err)
        }
       
    }
const createKnowledge = (req, res)=>{

    let title = req.body.title
    let author = req.body.title
    let description = reg.body.description

    const knowledgetable = new knowledgemodel({
        title,
        author,
        description
    })

    knowledgetable.save()
    .then(()=>{res.status(200).json({message:"New data saved in to knowledge table"})})
    .catch((err)=>{res.json({error:err})})
}

const editKnowledge = (req,res) =>{
    let id = req.params.id

    knowledgemodel.findById(id).then((data)=>{
           data.title = req.body.title
           data.author  = req.body.title
           data.description = req.body.description

           data.save()
           .then(()=>{res.status(200).json({message:'Knowledge table is updated, succesfully!'})})
           .catch((err)=>{res.json({err})})
    })
    .catch((err)=>{res.json({error:err})})
}

const removeKnowledge =(req,res) =>{
      
    let id = req.params.id

    knowledgemodel.findByIdAndDelete(id) 
    .then(()=>{res.status(200).json({message:`Knowledge with id ${id} has been removed successfuly`})})
    .catch((err)=>{res.json({error:err})})
}

module.exports ={
    createKnowledge,
    editKnowledge,
    removeKnowledge,
    knowledgeIndex
}