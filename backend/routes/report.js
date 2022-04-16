const router = require('express').Route()
const {reportIndex,createReport,editReport,deleteReport} = require('../controllrer/report')


/* load page */
router.route('/').get(reportIndex)

/* create new report */
router.route('/create').post(createReport)

/* update a report */
router.route('/update/:id').put(editReport)

/* Delete report */
router.route('/delete/:id').delete(deleteReport)