const Router = require ('koa-router')
const console_router = new Router()
const api = require('../Api/index')

console_router.post('/updateUser',async(ctx)=>{
    let result = await api.deleteData()
    const res_query = ctx.query;
    ctx.body ={
        myRes:result,
        queryStr:res_query
    }
})

module.exports = console_router