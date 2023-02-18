import { describe, expect, test } from "@jest/globals"
import request from 'supertest'
import app from './app.js'

describe('/', () => {
    test('says hello world', async () => {
        const response = await request(app.callback()).get('/')

        expect(response.status).toBe(200)
        expect(response.text).toContain(`Hello world!`)
    })
})

describe('/homepage', () => {
    test('has the title set correctly', async () => {
        const response = await request(app.callback()).get('/homepage')

        expect(response.status).toBe(200)
        expect(response.text).toContain(`<title>Welcome to GOV.UK</title>`)
    })
})