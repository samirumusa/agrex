    const router = require('express').Route()
    const {knowledgeIndex,createKnowledge,editKnowledge,deleteKnowledge} = require('../controllrer/knowledge')


/* load page */
router.route('/').get(knowledgeIndex)

/* create a new knowledge */
router.route('/create').post(createKnowledge)

/* update a knowledge*/
router.route('/update/:id').put(editKnowledge)

/* Delete knowledge */
router.route('/delete/:id').delete(deleteKnowledge)