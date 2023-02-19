import { jsonSchemaToZod } from 'json-schema-to-zod'
import {readFileSync,mkdirSync,writeFileSync} from 'fs'

const mappings = [
    {
        source: 'publishing-api/content_schemas/dist/formats/homepage/frontend/schema.json',
        destFolder: 'publishing-api',
        fileName: 'homepage-content-schema',
        schemaPatches: (jsonSchema: any) => {
            // The homepage content item has additional links, even though the schema says it shouldn't
            jsonSchema.properties.links.additionalProperties = true
        }
    }
]
for(const mapping of mappings) {
    const content = readFileSync(`./submodules/${mapping.source}`)
    const schema = JSON.parse(content.toString())
    mapping.schemaPatches(schema)
    const result = jsonSchemaToZod(schema)
    mkdirSync(`src/zod/${mapping.destFolder}`, {recursive: true})
    writeFileSync(`src/zod/${mapping.destFolder}/${mapping.fileName}.ts`, result)
}

