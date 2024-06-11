#!/bin/bash

# Step 1: Install Tailwind CSS
echo "Installing Tailwind CSS..."
npm install tailwindcss

# Step 2: Create a Tailwind Configuration File
echo "Generating Tailwind configuration file..."
npx tailwindcss init

# Step 3: Append Tailwind CSS imports to index.css
echo "Importing Tailwind CSS into index.css..."
cat <<EOF >> src/index.css
/* Append Tailwind CSS imports */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
EOF

# Step 4: Import Tailwind CSS into index.js or App.js
echo "Importing Tailwind CSS into index.js or App.js..."
echo "import './index.css';" >> src/index.js  # Modify this line according to your project structure

echo "Tailwind CSS setup completed successfully!"

