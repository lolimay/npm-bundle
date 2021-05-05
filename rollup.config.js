import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'index.js',
  output: {
    file: 'deps.ts',
    format: 'cjs',
    banner: '// @ts-nocheck'
  },
  plugins: [nodeResolve(), commonjs()]
}
