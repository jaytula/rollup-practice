import outputManifest from 'rollup-plugin-output-manifest';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: 'src/main.js',
  output: {
    dir: 'build',
    entryFileNames: 'bundle.[hash].js',
    strict: false,
    format: 'iife'
  },
  plugins: [
    outputManifest(),
  ]
}

export default config;