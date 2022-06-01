import resolve, {nodeResolve} from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { babel } from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
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
      replace({
        include: ["./**/TopNavLogo.jsx"],
        preventAssignment: true,
        // Replace ReactComponent to allow resolution of SVG files under Rollup
        "ReactComponent": "default"
      }),
      resolve({ extensions: ['.jsx', '.js'] }),
      commonjs(),
      babel({ exclude: 'node_modules/**' }),
      image(),
      postcss(),
      
    ],
  },
  {
    external: [/\.(css|less|scss)$/],
  },
];