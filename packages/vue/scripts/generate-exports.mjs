import { readdirSync, writeFileSync } from 'node:fs'
import { join, basename } from 'node:path'

const OUTPUT_FILE = './lib/generated-exports.ts'
const DIRS_TO_SCAN = [
  { path: './src/components', type: 'default' },
  { path: './src/templates', type: 'default' }
]
const STORE_DIR = './src/store'

// 1. Handle Components & Templates (Default Exports)
let exportLines = ['// --- Components & Templates ---']
DIRS_TO_SCAN.forEach(({ path, type }) => {
  const getFiles = (dir) => {
    const entries = readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = join(dir, entry.name)
      if (entry.isDirectory()) {
        getFiles(fullPath)
      } else if (entry.name.endsWith('.vue')) {
        const name = basename(entry.name, '.vue')
        const relPath = fullPath.replace('src/', '../src/').replace(/\\/g, '/')
        exportLines.push(`export { default as ${name} } from '${relPath}'`)
      }
    }
  }
  getFiles(path)
})

// 2. Handle Mixins (Named Exports)
// Instead of listing them all, we "proxy" them
exportLines.push('\n// --- Utilities & Mixins ---')
exportLines.push("export * from '../src/utils/mixins'")
exportLines.push("export { default as filters } from '../src/utils/filters'")
exportLines.push("export { default as dayjs } from '../src/utils/dayjs'")

// 3. Handle 3rd Party re-exports (for the "Bundled" strategy)
// exportLines.push('\n// --- 3rd Party Re-exports ---')
// exportLines.push("export { default as vClickOutside } from 'click-outside-vue3'")
// exportLines.push("export { Swiper, SwiperSlide } from 'swiper/vue'")
// exportLines.push("export { default as VueCompareImage } from 'vue3-compare-image'")

// 4. Handle Stores (Automated for the whole directory)
exportLines.push('\n// --- Stores ---')

try {
  const storeFiles = readdirSync(STORE_DIR).filter(
    (file) => (file.endsWith('.ts') || file.endsWith('.js')) && !file.endsWith('.d.ts') // exclude type declaration files
  )

  storeFiles.forEach((file) => {
    // Remove the extension for the import path
    const fileName = file.replace('src/', '../src/').replace(/\.(ts|js)$/, '')
    exportLines.push(`export * from '../src/store/${fileName}'`)
  })
} catch (err) {
  console.warn('⚠️ No store directory found or error reading it:', err.message)
}

// 5. Handle TypeScript Interfaces/Types
exportLines.push('\n// --- Types ---')
// This is critical for consumer apps using TypeScript
exportLines.push("export type * from '../src/interfaces'")

// 6. Handle Constants (Values like eduMetadataDictionary, contentAliases)
exportLines.push('\n// --- Constants ---')
exportLines.push("export * from '../src/constants'")

const content = `// ⚠️ AUTO-GENERATED FILE - DO NOT EDIT MANUALLY\n// Generated on: ${new Date().toLocaleString()}\n\n${exportLines.join('\n')}\n`

writeFileSync(OUTPUT_FILE, content)
console.log('✅ Library exports updated successfully.')
