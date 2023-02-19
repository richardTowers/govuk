import Koa from 'koa'
import KoaRouter from 'koa-router'
import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import addBasicAuth from './basic-auth.js'
import Index from './components/index.js'
import prepareHome from './components/documents/home.js'

const app = new Koa()
const router = new KoaRouter()

addBasicAuth(app)

router.get('/', ctx => {
    ctx.body = renderToStaticMarkup(<Index />) + '\n'
}).get('/homepage', async (ctx) => {
    const Home = await prepareHome()
    ctx.body = renderToStaticMarkup(<Home />) + '\n'
})

app.use(router.routes())

export default app