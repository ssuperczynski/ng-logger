import resolve from 'rollup-plugin-node-resolve';

// Add here external dependencies that actually you use.
const globals = {
    '@angular/core': 'ng.core',
};

export default {
    entry: './dist/modules/ng-logger.es5.js',
    dest: './dist/bundles/ng-logger.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'nsalaun.ngLogger',
    plugins: [resolve()],
    external: Object.keys(globals),
    globals: globals,
    onwarn: () => { return }
}
