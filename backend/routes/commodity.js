const router = require('express').Route()


/* load page */
router.route('/').get((req,res)=>{

})

/* create new new commodity */
router.route('/create').post((req,res)=>{

})

/* update an commodity */
router.route('/update/:id').put((req,res)=>{

})

/* Delete commodity */
router.route('/delete/:id').delete((req,res)=>{

})