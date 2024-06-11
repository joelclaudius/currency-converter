#!/bin/bash

# Function to display error message and exit
display_error() {
    echo "Error: $1"
    exit 1
}

# Check if index.css file exists
if [ ! -f "./src/index.css" ]; then
    display_error "index.css file not found. Make sure you have an index.css file in the src directory."
fi

# Install Tailwind CSS and its dependencies
npm install tailwindcss@latest postcss@latest autoprefixer@latest

# Initialize Tailwind CSS configuration
npx tailwindcss init -p

# Update postcss.config.js file to include Tailwind CSS
cat <<EOT >> ./postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
EOT

# Import Tailwind CSS in index.css
sed -i '1i@tailwind base;\n@tailwind components;\n@tailwind utilities;' ./src/index.css

echo "Tailwind CSS setup completed successfully!"
