import {parse} from 'yaml'
import {readFileSync,mkdirSync,writeFileSync} from 'fs'
import { jsonToZod } from "json-to-zod"

function templateZodFile(zod: string, pathForLocale: string, variableName: string) {
    return (
`import {readFile} from 'fs/promises'
import {parse} from 'yaml'
import {z} from 'zod'

${zod}

export default async function loadTranslations(locale: string) {
  const content = await readFile((${pathForLocale})(locale))
  const yaml = parse(content.toString())[locale]
  return ${variableName}.parse(yaml)
}
`)
}

const mappings = [
    {pathForLocale: (l: string) => `submodules/frontend/config/locales/${l}.yml`, locale: 'en', destFolder:'frontend', fileName: 'translations', variableName: 'translations'},
    {pathForLocale: (l: string) => `submodules/government-frontend/config/locales/${l}.yml`, locale: 'en', destFolder:'government-frontend', fileName: 'translations', variableName: 'translations'},
]
for(const mapping of mappings) {
    const content = readFileSync(mapping.pathForLocale(mapping.locale))
    const yaml = parse(content.toString())[mapping.locale]
    const zod = jsonToZod(yaml, mapping.variableName)
    const result = templateZodFile(zod, mapping.pathForLocale.toString(), mapping.variableName)
    mkdirSync(`src/zod/${mapping.destFolder}`, {recursive: true})
    writeFileSync(`src/zod/${mapping.destFolder}/${mapping.fileName}.ts`, result)
}
