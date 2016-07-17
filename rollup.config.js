import multiEntry from 'rollup-plugin-multi-entry';

export default {
  entry: 'test/spec/*.spec.js',
  plugins: [multiEntry()],
  format: 'es',
  dest: 'test/spec/testAll.js'
};