const Router = require('koa-router');
const auth_router = new Router()
const api = require('../Api/index')

auth_router.get('/getAuth', async (ctx) => {
    // 查询数据
    const result = await api.searchData()
    console.log(result, 'result')
    //从request中获取GET请求
    let req_query = ctx.request;
    //从上下文中直接获取
    ctx.body = {
        mysqlRes: result,
        req_query,
    }
})

module.exports = auth_router