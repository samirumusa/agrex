        const router = require('express').Router()
        const {investorIndex,createInvestor,editInvestor,removeInvestor} = require('../controller/investor')

/* load page */
router.route('/').get(investorIndex)

/* create new investor */
router.route('/create').post(createInvestor)

/* update an investor */
router.route('/update/:id').put(editInvestor)

/* Delete investor */
router.route('/delete/:id').delete(removeInvestor)
module.exports = router