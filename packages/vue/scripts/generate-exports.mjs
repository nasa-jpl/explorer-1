import { readdirSync, writeFileSync } from 'node:fs'
import { join, basename } from 'node:path'

const OUTPUT_FILE = './lib/generated-exports.ts'
const DIRS_TO_SCAN = [
  { path: './src/components', type: 'default' },
  { path: './src/templates', type: 'default' }
]
const STORE_DIR = './src/store'
const UTILS_DIR = './src/utils'

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

// Handle Utilities (Named Exports)
exportLines.push('\n// --- Utilities ---')
try {
  const utilFiles = readdirSync(UTILS_DIR).filter(
    (file) => (file.endsWith('.ts') || file.endsWith('.js')) && !file.endsWith('.d.ts')
  )
  utilFiles.forEach((file) => {
    const fileName = file.replace(/\.(ts|js)$/, '')
    exportLines.push(`export * from '../src/utils/${fileName}'`)
  })
} catch (err) {
  console.warn('⚠️ No utils directory found or error reading it:', err.message)
}

// Handle Stores
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

// Handle TypeScript Interfaces/Types
exportLines.push('\n// --- Types ---')
exportLines.push("export type * from '../src/interfaces'")

// Handle Constants (Values like eduMetadataDictionary, contentAliases)
exportLines.push('\n// --- Constants ---')
exportLines.push("export * from '../src/constants'")

// Handle 3rd Party re-exports
exportLines.push('\n// --- 3rd Party Re-exports ---')
exportLines.push("export { default as vClickOutside } from 'click-outside-vue3'")
exportLines.push("export { Swiper, SwiperSlide } from 'swiper/vue'")
exportLines.push("export { default as VueCompareImage } from 'vue3-compare-image'")
exportLines.push("export { BindOncePlugin } from 'vue-bind-once'")
exportLines.push("export { default as VueObserveVisibility } from 'vue3-observe-visibility'")

const content = `// ⚠️ AUTO-GENERATED FILE - DO NOT EDIT MANUALLY\n// Generated on: ${new Date().toLocaleString()}\n\n${exportLines.join('\n')}\n`

writeFileSync(OUTPUT_FILE, content)
console.log('✅ Library exports updated successfully.')
