// rollup.config.js

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default [
  // Bundle UMD para navegadores
  {
    input: 'src/index.js',
    output: {
      file: 'dist/motus.umd.js',
      format: 'umd',
      name: 'Motus',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  },
  // Bundle ES Modules
  {
    input: 'src/index.js',
    output: {
      file: 'dist/motus.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  }
];
