import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve file paths using ES module syntax
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat with the correct base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Get the ESLint config, extending the necessary configurations
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

// Disable the ESLint rule for `postcss.config.js` to allow `require()` in CommonJS format
/* eslint-disable @typescript-eslint/no-require-imports */

// PostCSS config example with CommonJS style imports
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [autoprefixer, tailwindcss],
};
