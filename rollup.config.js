import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import image from '@rollup/plugin-image';
import dts from 'rollup-plugin-dts';
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

export default [
  {
    input: "lib/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      //babel({ exclude: 'node_modules/**'}),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      image(),
      postcss(),
      
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];