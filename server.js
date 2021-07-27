const Koa = require('koa');
const app = new Koa();
// const Router = require('koa-router');
// const router = new Router()
const routers = require('./src/router')


app.use(routers.routes());
app.use(routers.allowedMethods())

app.listen(3000, () => {
    console.log('启动成功')
})
