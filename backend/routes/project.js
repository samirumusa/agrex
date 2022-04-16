const router = require('express').Route()
const {farmIndex,createFarm,editFarm,deleteFarm} = require('../controller/project')

/* load page */
router.route('/').get(farmIndex)

/* create new new farm */
router.route('/create').post(createFarm)

/* update a farm */
router.route('/update/:id').put(editFarm)

/* Delete a farm */
router.route('/delete/:id').delete(deleteFarm)