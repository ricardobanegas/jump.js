import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const info = require('./package.json')

const config = {
  entry: 'src/jump.js',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    })
  ],
  targets: [
    {
      dest: info.main,
      format: 'umd',
      moduleName: 'Jump'
    }, {
      dest: info.module,
      format: 'es'
    }
  ]
}

export default config
