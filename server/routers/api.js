/**
 * Created by Sugar on 2019/12/15.
 */
const router = require('koa-router')()
const questionsController = require('./../controllers/questions')

const routers = router
  .get('/questions', questionsController.getQuestions)


module.exports = routers
