#!/bin/bash

if [ "$CI" = "true" ]; then
  echo "Skipping sync: CI environment detected."
  exit 0
fi

# this will only work if you have access to the repo
REMOTE_REPO="https://github.com/nasa-jpl/explorer-1-fonts.git"
TEMP_DIR=".temp-clone-explorer-1-fonts"
TARGET_DIR="./packages/common/src/fonts/helvetica-now"

# Check for Repository Access
# ls-remote -h checks for the HEAD of the repo without downloading anything
if ! git ls-remote -h "$REMOTE_REPO" > /dev/null 2>&1; then
  echo "⚠️  Warning: No access to $REMOTE_REPO. Skipping font sync."
  echo "Make sure you are logged into Git or have the correct SSH keys."
  exit 0
fi

echo "Font repo access confirmed. Syncing font files..."

# Clean up previous attempts
rm -rf $TEMP_DIR

# Shallow clone (depth 1) without downloading files yet
git clone --depth 1 --filter=blob:none --sparse $REMOTE_REPO $TEMP_DIR

# Move into the temp dir and select specific folder
cd $TEMP_DIR
git sparse-checkout set "core/fonts/helvetica-now/"
cd ..

# Create target directory and move files
mkdir -p $TARGET_DIR
cp -R $TEMP_DIR/core/fonts/helvetica-now/. $TARGET_DIR/

# Cleanup
rm -rf $TEMP_DIR

echo "✅ Font files synced successfully!"