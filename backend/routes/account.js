const router = require('express').Route()
const {accountIndex,createAccount,editAccount,deleteAccount} = require('../controllrer/account')



/* load page */
router.route('/').get(accountIndex)

/* create new account */
router.route('/create').post(createAccount)

/* update an account */
router.route('/:id').put(editAccount)

/* Delete Account */
router.route('/:id').delete(deleteAccount)
