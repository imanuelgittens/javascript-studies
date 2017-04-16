module.exports = function(grunt) {

  /*  require('load-grunt-tasks')(grunt);*/

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // Project configuration.
    grunt.initConfig({
        // Config will go here
        uglify: {
            all: {
                files: {
                    'dist/app.js': ['js/*.js']
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/main.css': ['css/*.css']
                }
            }
        },
        htmllint: {
            all: ['html/*.html']
        },
        csslint: {
            all: {
                src: ['css/*.css']
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'js/*.js']
        }
    });

    //grunt --mode=live or grunt --mode=test
    var mode = grunt.option('mode') || 'dev';
    // Default task(s).
    grunt.registerTask('default', function () {
        console.log('Grunt has run in ' + mode + ' mode!')
    });
};