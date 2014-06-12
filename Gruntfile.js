/**
 *  Grunt task dependencies can be installed on linux via the following command:
 *
 *          'sudo apt-get install imagemagick mplayer gtk-recordmydesktop'
 *
 */
module.exports = function(grunt){

    //Setup config for tasks
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


        shell:{


            server:{
                command: 'echo test'

            }

        }


    });


    //Runs shell commands within grunt
    grunt.loadNpmTasks('grunt-shell');


    //Start the php file server
    grunt.registerTask('default',['shell']);


};