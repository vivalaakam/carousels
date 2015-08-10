/*jslint node: true */
"use strict";


module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            options: {
                port: 3000,
            },
            dev: {
                options: {
                    script: './server/bin/www'
                }
            }
        },
        watch: {
            app: {
                files: [
                    "app/**/*.js"
                ],
                tasks: ['concat'],
            },
            less: {
                files: [
                    "less/**/*.less"
                ],
                tasks: ['less']
            }
        },
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false,
                    optimization: 2
                },
                files: {
                    "./public/stylesheets/style.css": "./less/app.less" // destination file and source file
                }
            },
            production: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "./public/stylesheets/style.css": "./less/app.less" // destination file and source file
                }
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['bower_components/bootstrap/fonts/**'],
                    dest: 'public/fonts',
                    filter: 'isFile',
                }],
            },
        },
        concat: {
            dist: {
                src: [
                    'bower_components/angular/angular.js',
                    'app/**/*.js',
                ],
                dest: 'public/javascripts/main.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('default', ['less:development', 'concat', 'copy', 'express', 'watch']);

};
