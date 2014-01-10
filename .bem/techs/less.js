var BORSCHIK_CSS_TECH = require('bem/node_modules/borschik/lib/techs/css'),
    BEM = require('bem'),
    Q = BEM.require('q'),
    LESS = require('less');

exports.API_VER = 2;

exports.techMixin = {

    getBuildResultChunk : function(relPath) {
        return '@import url(' + relPath + ');\n';
    },

    getBuildSuffixesMap: function() {
        return {
            css: ['less', 'css']
        };
    },

    getCreateSuffixes: function() {
        return ['less'];
    },

    processBuildResult : function(res) {
        var defer = Q.defer();

        if (!res) {
            defer.resolve([]);
            return defer.promise;
        }

        LESS.render(res, function(err, css) {
            if (err) return defer.reject(err);

            return defer.resolve([css]);
        });

        return defer.promise;
    },

    getBuildResult : function(filteredFiles, destSuffix, output, opts) {
        return this.__base.apply(this, arguments)
            .then(function(res) {
                var tech = new BORSCHIK_CSS_TECH.Tech({
                        comments : true,
                        freeze : false,
                        minimize : false
                    }),
                    file = new BORSCHIK_CSS_TECH.File(tech, output, 'include');

                file.content = file.parse(res.join(''));

                return this.processBuildResult(file.process(output));
            }.bind(this));
    }

};
