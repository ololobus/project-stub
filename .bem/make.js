/* jshint node:true */
/* global MAKE */

//process.env.YENV = 'production';
//process.env.XJST_ASYNCIFY = 'yes';

console.log('\n\n!!!!!!!!!!!!!------------------BEM_CONFLICTS_NO:', process.env.BEM_CONFLICTS_NO);

var environ = require('bem-environ')(__dirname);
environ.extendMake(MAKE);

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,
    bundlesLevelsRegexp: /^.+?\.bundles$/,

});


MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'js',
            'css',
            'ie.css',
            'html'
        ];

    }

});
