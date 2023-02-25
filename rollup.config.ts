import ts from "rollup-plugin-ts";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "service-worker/sw.ts",
  output: {
    dir: "public",
    format: "cjs",
    name: "sw",
  },
  plugins: [
    ts({
      tsconfig: "service-worker/tsconfig.json",
    }),
  ],
};
