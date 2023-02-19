import { describe, expect, test } from "@jest/globals"
import request from 'supertest'
import app from './app.js'

function withBasicAuth(request: request.Test) {
    return request.set('Authorization', `basic ${Buffer.from('richardtowers:experimental').toString('base64')}`)
}

describe('/', () => {
    test('says hello world', async () => {
        const response = await withBasicAuth(request(app.callback()).get('/'))
        expect(response.status).toBe(200)
        expect(response.text).toContain(`Hello world!`)
    })
})

describe('/homepage', () => {
    test('has the title set correctly', async () => {
        const response = await withBasicAuth(request(app.callback()).get('/homepage'))

        expect(response.status).toBe(200)
        expect(response.text).toContain(`<title>Welcome to GOV.UK</title>`)
    })
})