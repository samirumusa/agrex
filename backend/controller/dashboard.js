
const dashboard =(req, res)=>{

        try{
            const data = req.body.data
    
            res.status(200).json('welcome to the dashboard')
        
        }catch(err){
           res.json(err)
        }
       
    }

module.exports ={
    dashboard,
   
}