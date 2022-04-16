   const router = require('express').Route()
   const {dashboard} = require('../controllrer/developer')


   router.route('/').get(dashboard)
   
  

