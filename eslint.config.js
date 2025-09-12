import js from "@eslint/js";
import standard from "eslint-plugin-standard";
import globals from "globals";

export default [
  js.configs.recommended, // Aturan dasar dari ESLint
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      standard: standard
    },
    rules: {
      ...standard.configs.recommended.rules // Terapkan semua aturan dari Standard
    },
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }
];