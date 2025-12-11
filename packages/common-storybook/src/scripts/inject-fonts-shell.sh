#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# --- Configuration (Passed as arguments from YAML) ---
BASE_DIR="$1"
INPUT_PATH="$2"
OUTPUT_DATA_FILE="$3"
OUTPUT_FLAG_FILE="$4"
BASE64_GENERATOR_SCRIPT="$5" # Path to your Node helper script

ARTIFACT_FILE="licensed-fonts-base64.css"

echo "Running shell injection script..."
echo "Input Path Check: $INPUT_PATH"

# --- CHECK FILE EXISTENCE ---
if [ -f "$INPUT_PATH" ]; then
  
  # 1. READ BASE64 STRING using the helper script
  # We run the node script and capture its output (the full Base64 string)
  BASE64_CONTENT=$("$BASE64_GENERATOR_SCRIPT" "$INPUT_PATH")
  
  # 2. GENERATE FONT DATA MODULE using a HEREDOC (the clean way to write multi-line strings)
  cat > "$OUTPUT_DATA_FILE" <<EOF
/** Generated with LICENSED FONT DATA. */
export const licensedFontStyles = \`
@font-face {
  font-family: 'Helvetica Now Display';
  src: url('data:application/x-font-opentype;base64,${BASE64_CONTENT}') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap; 
}
/* You would include the rest of your combined @font-face rules here */
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