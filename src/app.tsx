import Koa from 'koa'
import KoaRouter from 'koa-router'
import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import Index from './components/index.js'
import Home from './components/documents/home.js'

const app = new Koa()
const router = new KoaRouter()

router.get('/', ctx => {
    ctx.body = renderToStaticMarkup(<Index />) + '\n'
}).get('/homepage', ctx => {
    ctx.body = renderToStaticMarkup(<Home />) + '\n'
})

app.use(router.routes())

export default app