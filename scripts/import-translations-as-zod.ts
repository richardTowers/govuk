import {parse} from 'yaml'
import {readFileSync,mkdirSync,writeFileSync} from 'fs'
import { jsonToZod } from "json-to-zod"

function templateZodFile(zod: string, path: string, name: string) {
    return (
`import {readFile} from 'fs/promises'
import {parse} from 'yaml'
import {z} from 'zod'

${zod}

export default async function loadTranslations() {
  const content = await readFile('submodules/${path}')
  const yaml = parse(content.toString())
  return ${name}.parse(yaml)
}
`)
}

const mappings = [
    {source: 'frontend/config/locales/en.yml', destFolder:'frontend', name: 'translations'},
    {source: 'government-frontend/config/locales/en.yml', destFolder:'government-frontend', name: 'translations'},
]
for(const mapping of mappings) {
    const content = readFileSync(`./submodules/${mapping.source}`)
    const yaml = parse(content.toString())
    const zod = jsonToZod(yaml, mapping.name)
    const result = templateZodFile(
        zod,
        `${mapping.destFolder}/${mapping.name}.ts`,
        mapping.name
    )
    mkdirSync(`src/zod/${mapping.destFolder}`, {recursive: true})
    writeFileSync(`src/zod/${mapping.destFolder}/${mapping.name}.ts`, result)
}
