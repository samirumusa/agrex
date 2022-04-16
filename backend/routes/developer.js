const router = require('express').Route()
const {developerIndex,createDeveloper,editDeveloper,deleteDeveloper} = require('../controller/developer')

/* load page */
router.route('/').get(developerIndex)

/* create new doc */
router.route('/create').post(createDeveloper)

/* update a doc */
router.route('/update/:id').put(editDeveloper)

/* Delete doc */
router.route('/delete/:id').delete(deleteDeveloper)