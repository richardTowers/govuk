import Koa, {HttpError} from 'koa'
import auth from 'koa-basic-auth'

export default function addBasicAuth(app: Koa) {
    app.use(async (ctx, next) => {
        try {
            await next()
        } catch (err) {
            if (err instanceof HttpError && err.status == 401) {
                ctx.status = 401
                ctx.set('WWW-Authenticate', 'Basic')
                ctx.body = 'Requires username / password\n'
            } else {
                throw err
            }
        }
    })
    app.use(auth({name: 'richardtowers', pass: 'experimental'})) // NOTE: password is intentionally not secret
}