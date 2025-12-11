// This script ONLY outputs the Base64 string for a single file.
const fs = require('fs')
const path = require('path')

const filePath = process.argv[2] // Path passed from the shell
if (!filePath) {
  console.error('Error: File path argument missing.')
  process.exit(1)
}

try {
  const fontData = fs.readFileSync(filePath)
  console.log(fontData.toString('base64')) // Print the Base64 string to stdout
} catch (error) {
  console.error(`Error reading file ${filePath}: ${error.message}`)
  process.exit(1)
}
