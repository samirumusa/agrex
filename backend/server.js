   const express = require('express')
   


   require('dotenv').config();
   
   const port   =  process.env.PORT || 8000


   const app = express()


   app.listen(port, console.log(   ` app is running at port ${port}`))


   app.use(express.json())

   /* app.use('/', require('../routes/index'))
   app.use('/account', require('../routes/account'))
   app.use('/farmer', require('../routes/farmer'))
   app.use('/consultant', require('../routes/consultant'))
   app.use('/report', require('../routes/report'))
   app.use('/developer', require('../routes/developer'))
   app.use('/knowledge', require('../routes/knowledge')) */

