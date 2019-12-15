/**
 * Created by Sugar on 2019/12/15.
 */
/**
 * 整合所有子路由
 */

const router = require('koa-router')()

// const home = require('./home')
const api = require('./api')

// router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())

module.exports = router
