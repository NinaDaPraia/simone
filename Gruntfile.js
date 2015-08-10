module.exports = function(grunt) {
    grunt.initConfig({
        karma: {
          unit: {
            configFile: 'karma.conf.js',
            singleRun: true
          }
        },
        ngconstant: {
          // Options for all targets
          options: {
            space: '  ',
            wrap: '"use strict";\n\n {%= __ngModule %}',
            name: 'config',
          },
          // Environment targets
          development: {
            options: {
              dest: 'components/influential-figures/config.js'
            },
            constants: {
              ENV: {
                name: 'development',
                apiEndpoint: 'http://0.0.0.0:8000'
              }
            }
          },
          production: {
            options: {
              dest: 'components/influential-figures/config.js'
            },
            constants: {
              ENV: {
                name: 'production',
                apiEndpoint: 'http://ninadapraia.github.io'
              }
            }
          }
        },
    });
    
    grunt.loadNpmTasks('grunt-ng-constant');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('test', ['ngconstant:development','karma']);
    grunt.registerTask('build', ['ngconstant:production']);
};