    const router = require('express').Router()
    const {knowledgeIndex,createKnowledge,editKnowledge,removeKnowledge} = require('../controller/knowledge')


/* load page */
router.route('/').get(knowledgeIndex)

/* create a new knowledge */
router.route('/create').post(createKnowledge)

/* update a knowledge*/
router.route('/update/:id').put(editKnowledge)

/* Delete knowledge */
router.route('/delete/:id').delete(removeKnowledge)

module.exports = router