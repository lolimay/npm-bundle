import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'index.js',
  output: {
    file: 'deps.ts',
    format: 'cjs',
    banner: '// @ts-nocheck',
    compact: true
  },
  plugins: [nodeResolve(), commonjs(), terser()]
}
