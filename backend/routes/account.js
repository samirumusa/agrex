const router = require('express').Router()
const {accountIndex,createAccount,editAccount,removeAccount} = require('../controller/account')



/* load page */
router.route('/').get(accountIndex)

/* create new account */
router.route('/create').post(createAccount)

/* update an account */
router.route('/:id').put(editAccount)

/* Delete Account */
router.route('/:id').delete(removeAccount)

module.exports = router