import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: here });

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [".next/**", ".claude/**", "node_modules/**", "next-env.d.ts", "public/**"],
  },
];

export default config;
