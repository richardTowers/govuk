// @ts-ignore
import { compare } from 'hiff'
import { readFileSync } from 'fs'

const liveSource = readFileSync('src/test-fixtures/live-homepage.html')
const renderedSource = readFileSync('src/test-fixtures/rendered-homepage.html')

const result = compare(liveSource, renderedSource)

if (result.different) {
    console.log('HTML documents are different, changes:')

    result.changes.forEach((change: any) => {
        console.log(`In node ${change.before.parentPath}:\n\t${change.message}`)
    });
}