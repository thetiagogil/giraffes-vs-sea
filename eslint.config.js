import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/**", "dist/**", "coverage/**"],
  },
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
        Enemy: "readonly",
        Game: "readonly",
        Player: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-redeclare": "off",
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^(Enemy|Game|Player)$",
        },
      ],
    },
  },
];
