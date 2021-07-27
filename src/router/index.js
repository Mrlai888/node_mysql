const Router = require('koa-router');
const router = new Router();
const auth = require('./auth');
const console = require ('./console')

router.use(auth.routes())
router.use(console.routes())

module.exports = router;