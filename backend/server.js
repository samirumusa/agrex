   const express = require('express')
   


   require('dotenv').config();
   
   const port   =  process.env.PORT || 8000


   const app = express()



   app.use(express.json())

   const dashboard = require('./routes/dashboard')
   const investor = require('./routes/investor')
   /* const farmer  = require('./routes/farmer') */
   const consultant = require('./routes/consultant')
   const report = require('./routes/report')
   const developer = require('./routes/developer')
   const knowledge = require('./routes/knowledge')

   app.use('/', dashboard)
   app.use('/investor', investor)
   /* app.use('/farmer', farmer) */
   app.use('/consultant', consultant)
   app.use('/report', report)
   app.use('/developer', developer)
   app.use('/knowledge', knowledge)



   app.listen(port, console.log(   ` app is running at port ${port}`))