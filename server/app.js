/**
 * Created by Sugar on 2019/12/15.
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const config = require('./../config')
const routers = require('./routers/index')

const app = new Koa()

// 配置ctx.body解析中间件
app.use(bodyParser())

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

// 监听启动端口
app.listen(config.port, '0.0.0.0')
console.log(`the server is start at port ${config.port}`)
