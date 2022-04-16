const router = require('express').Route()
const {consultantIndex,createConsultant,editConsultant,deleteConsultant} = require('../controllrer/consultant')

/* load page */
router.route('/').get(consultantIndex)

/* create new  dealer */
router.route('/create').post(createConsultant)

/* update a  dealer */
router.route('/update/:id').put(editConsultant)

/* Delete  a dealer */
router.route('/delete/:id').delete(deleteConsultant)

