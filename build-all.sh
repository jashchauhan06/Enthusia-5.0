#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Building Enthusia 5.0 for cPanel${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Function to build a project
build_project() {
    local dir=$1
    local name=$2
    
    echo -e "${BLUE}Building $name...${NC}"
    cd "$dir" || exit
    
    if [ ! -d "node_modules" ]; then
        echo "Installing dependencies for $name..."
        npm install
    fi
    
    npm run build
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ $name built successfully${NC}"
    else
        echo -e "${RED}✗ Failed to build $name${NC}"
        exit 1
    fi
    
    cd - > /dev/null
    echo ""
}

# Build main site
build_project "." "Main Enthusia Site"

# Build events
build_project "SITNovate-2.0-main" "SITNovate 2.0"
build_project "CODE-SPRINT-2.0-main" "CodeSprint 2.0"
build_project "SITank-2.0-main" "SITank 2.0"

# BuildBrand needs special handling
echo -e "${BLUE}Building BuildBrand...${NC}"
cd BuildBrand-main || exit

if [ ! -d "node_modules" ]; then
    echo "Installing dependencies for BuildBrand..."
    npm install
fi

# Install adapter-static if not present
if ! grep -q "@sveltejs/adapter-static" package.json; then
    echo -e "${YELLOW}Installing @sveltejs/adapter-static...${NC}"
    npm install -D @sveltejs/adapter-static
fi

npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ BuildBrand built successfully${NC}"
else
    echo -e "${RED}✗ Failed to build BuildBrand${NC}"
    exit 1
fi

cd - > /dev/null
echo ""

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  All builds completed successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Upload to cPanel:"
echo "  1. dist/ → public_html/"
echo "  2. SITNovate-2.0-main/dist/ → public_html/sitnovate/"
echo "  3. CODE-SPRINT-2.0-main/dist/ → public_html/codesprint/"
echo "  4. SITank-2.0-main/dist/ → public_html/sitank/"
echo "  5. BuildBrand-main/build/ → public_html/buildbrand/"
echo ""
echo "Note: BuildBrand uses SvelteKit and outputs to 'build/' instead of 'dist/'"
