import { jsonSchemaToZod } from 'json-schema-to-zod'
import {readFileSync,mkdirSync,writeFileSync} from 'fs'

const mappings = [
    {source: 'publishing-api/content_schemas/dist/formats/homepage/frontend/schema.json', destFolder: 'publishing-api', name: 'homepage-content-schema'}
]
for(const mapping of mappings) {
    const content = readFileSync(`./submodules/${mapping.source}`)
    const schema = JSON.parse(content.toString())
    const result = jsonSchemaToZod(schema)
    mkdirSync(`src/zod/${mapping.destFolder}`, {recursive: true})
    writeFileSync(`src/zod/${mapping.destFolder}/${mapping.name}.ts`, result)
}

