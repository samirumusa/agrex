const router = require('express').Router()
const {developerIndex,createDeveloper,editDeveloper,removeDeveloper} = require('../controller/developer')

/* load page */
router.route('/').get(developerIndex)

/* create new doc */
router.route('/create').post(createDeveloper)

/* update a doc */
router.route('/update/:id').put(editDeveloper)

/* Delete doc */
router.route('/delete/:id').delete(removeDeveloper)
module.exports = router
