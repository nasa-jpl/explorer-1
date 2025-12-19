#!/bin/bash

# --- Inject Fonts Shell Script ---
# Reads a github artifact that contains a font-face.css file that includes 
# base64-encoded fonts, and injects that css as a raw string in CI/CD
# Parameters are passed in the workflow yaml file


# Exit immediately if a command exits with a non-zero status
set -e

# --- Argument Mapping ---
# Arguments are passed from the GitHub Actions YAML step
INPUT_PATH="$2" # Path to the downloaded artifact handled in CI (licensed-fonts-base64.css)
OUTPUT_DATA_FILE="$3"
OUTPUT_FLAG_FILE="$4"

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