import json from '@rollup/plugin-json';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: 'src/fetcher.js',
  output: {
    file: 'fetcher.min.js',
    strict: false,
    format: 'cjs'
  },
  plugins: [
    json()
  ]
}

export default config;