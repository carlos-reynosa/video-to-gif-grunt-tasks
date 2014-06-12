module.exports = function(grunt){

    //Setup config for tasks
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /**
         * Decided on using direct shell commands for running command development tasks instead of using node module tasks.
         * This was due to issues in finding a solution for easily running and killing long running gunt tasks.
         */
        shell:{

            /**
             * Provides and easy server for development.
             */
            server:{
                command: 'php -S localhost:9000',
                options:{
                    execOptions:{

                        //site files are generated within this folder
                        cwd: './public'
                    }
                }
            },

            /**
             * Uses the node implementation of livereload for refreshing the browser.
             */
            livereload:{

                //Only look for changes in the newly regenerated blog in the public folder
                command: 'livereloadx ./public'
            },

            /**
             * Rebuilds the blog when the source has been updated.
             * Not using watch task due to issues.
             */
            buildSite:{

                command: 'php ./core/builder.php -w'
            }

        },
        sass:{

            /*
             compileSassGrid:{

             options:{

             style:'expanded'
             },

             files:{

             '': ''

             }

             }*/


        },

        watch:{
            bowerComponents:{
                tasks:['compile-assets'],

                files:['source/bower_components/**/*scss']

            }

        }


    });


    //Runs shell commands within grunt
    grunt.loadNpmTasks('grunt-shell');


    //Watch files and run other grunt tasks when they change
    grunt.loadNpmTasks('grunt-contrib-watch');


    //Processes sass file tasks
    grunt.loadNpmTasks('grunt-contrib-sass');


    //Start the php file server
    grunt.registerTask('server',['shell:server']);

    //Starts the livereload file server
    grunt.registerTask('livereload',['shell:livereload']);

    //Generates the style guide when files have changed
    grunt.registerTask('build-site',['shell:buildSite']);


    //Compiles the Sass responsive grid
    grunt.registerTask('compile-grid',['sass:compileSassGrid']);

    //Processes assets by compiling or minifying
    grunt.registerTask('compile-assets',['compile-grid']);

    grunt.registerTask('watch-assets',['watch:bowerComponents']);


};