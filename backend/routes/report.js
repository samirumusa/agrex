const router = require('express').Router()
const {reportIndex,createReport,editReport,removeReport} = require('../controller/report')


/* load page */
router.route('/').get(reportIndex)

/* create new report */
router.route('/create').post(createReport)

/* update a report */
router.route('/update/:id').put(editReport)

/* Delete report */
router.route('/delete/:id').delete(removeReport)

module.exports = router