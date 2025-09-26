import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

// Helper function to read versions from all packages
function getPackageVersions() {
  const versions = {}

  // Resolve the absolute path to the 'packages' directory from the root of the monorepo
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const packagesDir = path.resolve(__dirname, '../../../../', 'packages')

  // Loop through all directories in 'packages'
  const packageFolders = fs.readdirSync(packagesDir)

  for (const folder of packageFolders) {
    const packagePath = path.join(packagesDir, folder, 'package.json')

    // Check if package.json exists
    if (fs.existsSync(packagePath)) {
      const { name, version } = JSON.parse(fs.readFileSync(packagePath, 'utf8'))

      // Create a global constant name, e.g., 'VERSION_LIBRARY_A'
      // Replace non-alphanumeric characters for a valid constant name
      const constName = name.toUpperCase().replace(/[^A-Z0-9]/g, '_')

      versions[`__VERSION_${constName}__`] = version
    }
  }
  console.log(versions)
  return versions
}

export const packageVersions = getPackageVersions()
// Example result:
// {
//   "__VERSION_REPO_LIBRARY_A__": "\"1.2.3\"",
//   "__VERSION_REPO_LIBRARY_B__": "\"4.5.6\""
// }
