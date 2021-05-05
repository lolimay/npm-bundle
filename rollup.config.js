import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'index.js',
  output: {
    file: 'deps.ts',
    format: 'cjs',
    banner: '// @ts-nocheck',
    compact: true
  },
  plugins: [nodeResolve(), commonjs(), /*terser()*/]
  // terser() will remove rollup's banner `// @ts-nocheck`
  // that would cause typescript lint failed. comment it now.
}
