import { describe, expect, test } from "@jest/globals"
import request from 'supertest'
import app from './app'

describe('/', () => {
    test('says hello world', async () => {
        const response = await request(app.callback()).get('/')

        expect(response.status).toBe(200)
        expect(response.text).toBe(`Hello world!\n`)
    })
})