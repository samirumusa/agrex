   const router = require('express').Route()
   const {dashboard} = require('../controller/dashboard')


   router.route('/').get(dashboard)
   
  

