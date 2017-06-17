import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/vue-sui-toast.js',
  dest: 'dist/vue-sui-toast.js',
  format: 'umd',
  moduleName: 'vueSuiToast',
  exports: 'named',

  plugins: [
    vue({
      compileTemplate: true,
      css: true
    }),
    buble()
  ]
}
