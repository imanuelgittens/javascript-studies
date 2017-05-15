module.exports = function(grunt) {

  /*  require('load-grunt-tasks')(grunt);*/

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-sass');
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
        },
        sass: {                              // Task 
            dist: {                            // Target 
              options: {                       // Target options 
                style: 'expanded'
              },
              files: {                         // Dictionary of files 
                'css/main.css': 'sass/main.scss',       // 'destination': 'source' 
              }
            }
          },
        postcss:{
            options: {
              map: true, // inline sourcemaps 
         
              processors: [
                require('pixrem')(), // add fallbacks for rem units 
                require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes 
                require('cssnano')() // minify the result 
              ]
            },
            dist: {
              src: 'css/*.css'
            }
        }
    });

    //grunt --mode=live or grunt --mode=test
    var mode = grunt.option('mode') || 'dev';
    // Default task(s).
    grunt.registerTask('default', function () {
        var logLevel = grunt.option('logLevel');
        var message = grunt.option('message');
        console.log('Grunt log: ['+logLevel+']-'+message);
        console.log('Grunt has run in ' + mode + ' mode!');
    });

    grunt.registerTask('css', function(){
        grunt.task.run(['sass', 'postcss']);

    });

    grunt.registerTask('build', function(){
        grunt.task.run(['sass', 'jshint', 'uglify', 'csslint', 'postcss']);
    });
    grunt.registerTask('deploy', function(){
        grunt.task.run(['build']);
    });
};