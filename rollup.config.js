import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json'

export default [
  {
    input: './src/mtl.js',
    output: {
      file: 'dist/mtl-core.js',
      format: 'umd',
      name: 'MTL'
    },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    
    plugins: [
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
  },
  {
    input: './src/summer/index.js',
    output: {
      file: 'dist/summer.js',
      format: 'umd',
      name: 'summer'
    },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    
    plugins: [
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
];
