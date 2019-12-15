/**
 * Created by Sugar on 2019/12/15.
 */
const http = require('./../utils/request')

module.exports = {

  /**
   * 获取问题列表
   * @param  {obejct} ctx 上下文对象
   */
  async getQuestions(ctx) {
    // 从上下文的request对象中获取
    let request = ctx.request
    let req_query = request.query

    try {
      let result = await http.get('/2.2/questions', {params: req_query});
      // console.log(result.data)

      /**
       * axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
       */

      ctx.body = result.data
    } catch (e) {
      ctx.status = 500;
      ctx.body = {
        message: 'error'
      };
    }
  }
}
