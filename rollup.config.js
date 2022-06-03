import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import image from '@rollup/plugin-image';
import dts from 'rollup-plugin-dts';
import typescript from "rollup-plugin-typescript2";
import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
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
      replace({
        include: ["./**/TopNavLogo.jsx"],
        preventAssignment: true,
        // Replace ReactComponent to allow resolution of SVG files under Rollup
        "ReactComponent": "default"
      }),
      resolve(),
      babel({ 
          exclude: 'node_modules/**',
          presets: ['@babel/env', '@babel/preset-react']
      }),
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