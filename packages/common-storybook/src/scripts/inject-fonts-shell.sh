#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# --- Argument Mapping ---
# Arguments are passed from the GitHub Actions YAML step
INPUT_PATH="$2" # Path to the downloaded licensed-fonts-base64.css file
OUTPUT_DATA_FILE="$3"
OUTPUT_FLAG_FILE="$4"
# $5: BASE64_GENERATOR_SCRIPT is NO LONGER USED

echo "Running shell injection script..."
echo "Input Path Check: $INPUT_PATH"

# --- CHECK FILE EXISTENCE ---
if [ -f "$INPUT_PATH" ]; then
  
  # 1. READ THE ENTIRE CSS FILE CONTENT
  # Use 'cat' to read the content of the file and store it in a shell variable.
  # The content is already CSS, so no further encoding is needed.
  CSS_CONTENT=$(cat "$INPUT_PATH")
  
  # Check if the content is empty 
  if [ -z "$CSS_CONTENT" ]; then
    echo "ERROR: CSS file is empty. Cannot proceed."
    exit 1
  fi
  
  # 2. GENERATE FONT DATA MODULE (Using HEREDOC)
  # Inject the raw CSS_CONTENT string directly into the JavaScript module.
  cat > "$OUTPUT_DATA_FILE" <<EOF
/** Generated with LICENSED FONT DATA. */
export const licensedFontStyles = \`
${CSS_CONTENT}
\`;

export function injectLicensedFonts() {
    if (typeof document !== 'undefined') {
        const styleTag = document.createElement('style');
        styleTag.textContent = licensedFontStyles;
        document.head.appendChild(styleTag);
        console.log('✅ Licensed Fonts injected via Shell (Raw CSS).');
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