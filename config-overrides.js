const { override, fixBabelImports, addLessLoader,addDecoratorsLegacy } = require('customize-cra');
// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     return config;
//   };


module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { 
        '@primary-color': '#5A689D',
        },
    }),
   addDecoratorsLegacy()
);