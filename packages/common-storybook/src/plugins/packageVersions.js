import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const versions = {}

function filterName(name) {
  // Replace non-alphanumeric characters for a valid constant name
  return name.toUpperCase().replace(/[^A-Z0-9]/g, '_')
}

function getVersionInfo(path) {
  const { name, version } = JSON.parse(fs.readFileSync(path, 'utf8'))
  const constName = filterName(name)
  // Create a global constant name, e.g., 'VERSION_LIBRARY_A'
  versions[`__VERSION_${constName}__`] = version
}

// Helper function to read versions from all packages
function getPackageVersions() {
  // Resolve the absolute path to the 'packages' directory from the root of the monorepo
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const rootDir = path.resolve(__dirname, '../../../../')
  const packagesDir = path.resolve(rootDir, 'packages')
  // Loop through all directories in 'packages'
  let packageFolders = fs.readdirSync(packagesDir)
  for (const folder of packageFolders) {
    const packagePath = path.join(packagesDir, folder, 'package.json')

    // Check if package.json exists
    if (fs.existsSync(packagePath)) {
      getVersionInfo(packagePath)
    }
  }

  // get version of root package
  getVersionInfo(path.join(rootDir, 'package.json'))

  console.log(versions)
  return versions
}

export const packageVersions = getPackageVersions()
// Example result:
// {
//   __VERSION__EXPLORER_1_COMMON__: '1.3.1',
//   __VERSION__EXPLORER_1_COMMON_STORYBOOK__: '0.0.3',
//   __VERSION__EXPLORER_1_HTML__: '0.1.1',
//   __VERSION__EXPLORER_1_NUXT__: '0.0.21',
//   __VERSION__EXPLORER_1_VUE__: '0.3.3',
//   __VERSION__NASA_JPL_EXPLORER_1__: '3.4.1'
// }
