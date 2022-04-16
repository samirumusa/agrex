const router = require('express').Router()


/* load page */
router.route('/').get((req,res)=>{

})

/* create new new contract */
router.route('/create').post((req,res)=>{

})

/* update an contract */
router.route('/update/:id').put((req,res)=>{

})

/* Delete contract */
router.route('/delete/:id').delete((req,res)=>{

})

module.exports = router