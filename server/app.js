/**
 * Created by Sugar on 2019/12/15.
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const axios = require('axios')
const qs = require('qs')

const config = require('./../config')
// const routers = require('./routers/index')

const app = new Koa()

// 配置ctx.body解析中间件
app.use(bodyParser())

// 初始化路由中间件
// app.use(routers.routes()).use(routers.allowedMethods())

app.use(async (ctx) => {
  let path = ctx.request.path
  let request = ctx.request
  let req_query = request.query

  try {
    let result = {}
    if (ctx.method === 'GET') {
      result = await axios.get(config.soAPiUrl + '/' + path, {params: req_query})
    }
    if (ctx.method === 'POST') {
      // console.log(request.body)
      const options = {
        method: 'POST',
        headers: {'content-type': request.header['content-type']},
        data: qs.stringify(request.body),
        // data: request.body,
        url: config.soAPiUrl + path
      }
      result = await axios(options)

      console.log(result)
    }
    // console.log(result.data)

    ctx.body = result.data
  } catch (e) {
    // console.log('============================')
    // console.log(e.response)
    // console.log('============================')

    ctx.status = e.response.status
    ctx.body = e.response.data
  }
})

app.listen(3000)

// 监听启动端口
app.listen(config.port)
console.log(`the server is start at port ${config.port}`)
