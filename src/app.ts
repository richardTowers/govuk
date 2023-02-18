import Koa from 'koa'
import KoaRouter from 'koa-router'

const app = new Koa()
const router = new KoaRouter()

router.get('/', ctx => {
    ctx.body = `Hello world!\n`
})

app.use(router.routes())

export default app