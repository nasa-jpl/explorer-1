#!/bin/bash

# This script runs in the CI shell environment to securely inject licensed font data.
# It resolves path and execution errors by explicitly calling 'node'.

# Exit immediately if a command exits with a non-zero status
set -e

# --- Argument Mapping ---
# Arguments are passed from the GitHub Actions YAML step
BASE_DIR="$1"
INPUT_PATH="$2"
OUTPUT_DATA_FILE="$3"
OUTPUT_FLAG_FILE="$4"
BASE64_GENERATOR_SCRIPT="$5" # The path to the generate-base64-string.js file

# --- Variables ---
ARTIFACT_FILE="licensed-fonts-base64.css"
FONT_FAMILY_NAME="Helvetica Now Display" # Adjust this to your font's name

echo "Running shell injection script..."
echo "Input Path Check: $INPUT_PATH"

# --- CHECK FILE EXISTENCE ---
if [ -f "$INPUT_PATH" ]; then
  
  # 1. READ BASE64 STRING using the helper script
  # 🛑 FIX: Explicitly call the 'node' interpreter to run the JavaScript file 🛑
  BASE64_CONTENT=$(node "$BASE64_GENERATOR_SCRIPT" "$INPUT_PATH")
  
  # Check if the content is empty (indicating read failure in the Node script)
  if [ -z "$BASE64_CONTENT" ]; then
    echo "ERROR: Base64 content is empty. Cannot proceed."
    exit 1
  fi
  
  # 2. GENERATE FONT DATA MODULE (Using HEREDOC for clean multi-line JS output)
  # The Base64 content is injected into the JavaScript module.
  cat > "$OUTPUT_DATA_FILE" <<EOF
/** Generated with LICENSED FONT DATA. */
export const licensedFontStyles = \`
@font-face {
  font-family: '${FONT_FAMILY_NAME}';
  src: url('data:application/x-font-opentype;base64,${BASE64_CONTENT}') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap; 
}
/* ADD ALL other required @font-face rules for different weights/styles here */
\`;

export function injectLicensedFonts() {
    if (typeof document !== 'undefined') {
        const styleTag = document.createElement('style');
        styleTag.textContent = licensedFontStyles;
        document.head.appendChild(styleTag);
        console.log('✅ Licensed Fonts injected via Shell.');
    }
}
EOF
  
  # 3. GENERATE GLOBAL FLAG (Success)
  echo "window.__IS_LICENSED_FONT_AVAILABLE__ = true;" > "$OUTPUT_FLAG_FILE"
  echo "Successfully injected licensed font data."
  
else
  # --- FALLBACK PATH ---
  echo "Artifact not found at $INPUT_PATH. Generating safe fallbacks."
  echo "export function injectLicensedFonts() {}" > "$OUTPUT_DATA_FILE"
  echo "window.__IS_LICENSED_FONT_AVAILABLE__ = false;" > "$OUTPUT_FLAG_FILE"
fi