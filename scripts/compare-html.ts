
import Parser from 'tree-sitter'
// @ts-ignore: TS7016
import Html from 'tree-sitter-html'
import {readFileSync} from 'fs'

const parser = new Parser()
parser.setLanguage(Html)

const liveSource = readFileSync('src/test-fixtures/live-homepage.html').toString()
const liveTree = parser.parse(liveSource)

const renderedSource = readFileSync('src/test-fixtures/rendered-homepage.html').toString()
const renderedTree = parser.parse(renderedSource)

compare(liveTree.rootNode, renderedTree.rootNode)

function printNode(source: string, node: Parser.SyntaxNode): string {
    switch (node.type) {
        case 'text':
        case 'start_tag':
            return `${node.type}(${source.substring(node.startIndex, node.endIndex)})`
        case 'element':
            return `${node.type}(${node.startIndex}, ${node.endIndex})`
        default:
            return node.type
    }
}

function isNonTrivialElement(source: string, node: Parser.SyntaxNode) {
    if (node.type === 'comment') { return false }
    if (node.type === 'text' && /^\s*$/.test(source.substring(node.startIndex, node.endIndex))) { return false }
    return true
}

function compare(left: Parser.SyntaxNode, right: Parser.SyntaxNode, path = '/') {
    if (left.type !== right.type) { throw new Error(`Trees differ at path ${path}, ${printNode(liveSource, left)} is not equal to ${printNode(renderedSource, right)}`) }
    const leftChildren = left.children.filter(x => isNonTrivialElement(liveSource, x))
    const rightChildren = right.children.filter(x => isNonTrivialElement(renderedSource, x))
    if (leftChildren.length !== rightChildren.length) { throw new Error(`Trees differ at path ${
        path
    }, left has ${
        leftChildren.map(x => printNode(liveSource, x))
    }, right has ${
        rightChildren.map(x => printNode(renderedSource, x))
    }`)}

    switch (left.type) {
        case 'attribute_name':
        case 'tag_name':
            const leftName = liveSource.substring(left.startIndex, left.endIndex)
            const rightName = renderedSource.substring(right.startIndex, right.endIndex)
            if (leftName !== rightName) {
                throw new Error(`Trees differ at ${path}, ${left.type} ${leftName} doesn't match ${rightName}`)
            }
            break
        case 'start_tag':
        case 'attribute':
        case 'element':
        case 'fragment':
            for(let i = 0; i < leftChildren.length; i++) {
                compare(leftChildren[i], rightChildren[i], `${path}${printNode(liveSource, left)}/`)
            }
            break
        case '<':
        case 'doctype':
            break
        default:
            throw new Error(`Unrecognised node type ${left.type} at ${path}`)
    }
}