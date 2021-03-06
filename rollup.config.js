import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default [
  {
    input: "src/main.js",
    plugins: [external(), resolve(), commonjs(), terser()],
    output: {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: false,
    },
    external: ["fs", "path"],
  },
];
