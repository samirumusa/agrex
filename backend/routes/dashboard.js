   const router = require('express').Route()
   const {dashboard} = require('../controller/developer')


   router.route('/').get(dashboard)
   
  

