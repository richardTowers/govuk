import { describe, expect, test } from "@jest/globals"
import request from 'supertest'
import { parse } from 'parse5'
import app from './app.js'
import { DefaultTreeAdapterMap as TreeAdapterTypeMap, Token } from 'parse5'

function withBasicAuth(request: request.Test) {
    return request.set('Authorization', `basic ${Buffer.from('richardtowers:experimental').toString('base64')}`)
}

type Document = TreeAdapterTypeMap['document']
type ChildNode = TreeAdapterTypeMap['childNode']
type Element = TreeAdapterTypeMap['element']
type Attribute = Token.Attribute
type TextNode = TreeAdapterTypeMap['textNode']

function compareHtmlDocument(left: Document, right: Document): void {
    if (left.mode !== right.mode) { throw new Error(`Documents mode did not match. Left: ${left.mode}, Right: ${right.mode}`) }
    if (left.nodeName !== right.nodeName ) { throw new Error(`Node names did not match. Left: ${left.nodeName}, Right: ${right.nodeName}`) }
    compareChildNodes(left.childNodes.filter(x => x.nodeName !== '#comment'), right.childNodes.filter(x => x.nodeName !== '#comment'), '/')
}

function compareChildNodes(left: ChildNode[], right: ChildNode[], path: string): void {
    if (left.length !== right.length) { throw new Error(`Different number of child nodes at path ${path}. Left: ${left.length}, Right: ${right.length}
Left: ${left.map(x => x.nodeName).join(', ')}
Right: ${right.map(x => x.nodeName).join(', ')}`) }
    for(let i = 0; i < left.length; i++) {
        compareChildNode(left[i], right[i], path)
    }
}

function compareChildNode(left: ChildNode, right: ChildNode, path: string): void {
    if (left.nodeName !== right.nodeName) { throw new Error(`Node names did not match at path ${path}. Left: ${left.nodeName}, Right: ${right.nodeName}`) }
    if ('tagName' in left && 'tagName' in right) {
        switch (left.tagName) {
            case 'template':
                throw new Error(`Not implemented at path ${path}- tagName: template`)
            default:
                compareElements(left, right, path)
                break
        }
    }
    switch (left.nodeName) {
        case '#documentType':
        case '#comment':
            break
        case '#text':
            const [lt, rt] = [left as TextNode, right as TextNode]
            if (lt.value.trim() !== rt.value.trim()) { throw new Error(`Text did not match at path ${path}. Left: ${lt.value}, Right: ${rt.value}`)}
        default:
            throw new Error(`Not implemented - nodeName: ${left.nodeName}`)
    }
}

function compareElements(left: Element, right: Element, path: string): void {
    if (left.tagName !== right.tagName) { throw new Error(`Element tag names did not match at path ${path}. Left: ${left.tagName}, Right: ${right.tagName}`) }
    const newPath = `${path}${left.tagName}/`
    compareAttributes(left.attrs, right.attrs, newPath)
    compareChildNodes(left.childNodes, right.childNodes, newPath)
}

function compareAttributes(left: Attribute[], right: Attribute[], path: string) {
    if (left.length !== right.length) { throw new Error(`Different number of attributes at ${path}. Left: ${left.length}, Right: ${right.length}`) }
    function byName(a: Attribute, b: Attribute) {
        if (a.name < b.name) { return -1 }
        if (a.name > b.name) { return 1 }
        return 0
    }
    left.sort(byName)
    right.sort(byName)
    for(let i = 0; i < left.length; i++) {
        compareAttribute(left[i], right[i], path)
    }
}

function compareAttribute(left: Attribute, right: Attribute, path: string) {
    if (left.name !== right.name) { throw new Error(`Different attribute names at ${path}. Left: ${left.name}, Right: ${right.name}`) }
    if (left.value !== right.value) { throw new Error(`Different attribute values at ${path}@${left.name}. Left: ${left.value}, Right: ${right.value}`) }
}

describe('/homepage', () => {
    test('renders the same HTML as https://www.gov.uk/homepage', async () => {
        const [liveResponse, appResponse] = await Promise.all([
            fetch('https://www.gov.uk'),
            withBasicAuth(request(app.callback()).get('/'))
        ])
        expect(liveResponse.status).toBe(200)
        expect(appResponse.status).toBe(200)

        const liveHtml = parse(await liveResponse.text())
        const appHtml = parse(appResponse.text)

        expect(() => compareHtmlDocument(liveHtml, appHtml)).not.toThrowError()
    })
})
