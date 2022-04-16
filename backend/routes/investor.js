        const router = require('express').Route()
        const {investorIndex,createInvestor,editInvestor,deleteInvestor} = require('../controller/investor')

/* load page */
router.route('/').get(investorIndex)

/* create new investor */
router.route('/create').post(createInvestor)

/* update an investor */
router.route('/update/:id').put(editInvestor)

/* Delete investor */
router.route('/delete/:id').delete(deleteInvestor)
