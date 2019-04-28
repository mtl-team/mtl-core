import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'
import json from 'rollup-plugin-json';

const env = process.env.NODE_ENV

const config = {
  input: './src/mtl.js',
  output: {
    file: 'dist/mtl-core.js',
    format: 'umd',
    name: 'mtl',
    globals: {
      'sha1': 'sha1', 
      'request': 'request',
    }
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    json(),
    resolve(),
    babel({
      runtimeHelpers: true,
      exclude: [
        'node_modules/**',
        '*.json'
      ],// only transpile our source code
    }),
    commonjs()
  ]
}

if (env === 'prod') {
  config.plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config
