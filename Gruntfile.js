/**
 * This grunt file will provide tasks to automate the use of linux commands that will convert a video file
 * into a gif.
 *
 *  Grunt task dependencies can be installed on linux via the following command:
 *          sudo apt-get install imagemagick mplayer gtk-recordmydesktop
 *
 *              -imagemagick: Used for converting images
 *              -mplayer: used for converting a video to image files
 *              -gtk-recordmydesktop: used for recording screen activity
 *
 *  Shell commands used:
 *
 *      --Convert video file to a list of images
 *        -   mplayer -ao null <video file directory> -vo jpeg:outdir= <output file directory>
 *
 *      -- Convert the list of files into a gif
 *          - convert /listOfImagesDirectory/* gifOutputFile.gif
 *
 *      -- Optimize the gif file
 *          - convert gifToOptimize.gif -fuzz 10% -layers Optimize optimizedGif.gif
 *
 */
module.exports = function (grunt) {

    //Setup config for tasks
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


        shell: {


            videoToJpeg: {
                command: function (videoDirectory, jpegFileDirectory) {
                    if (videoDirectory && jpegFileDirectory) {

                        console.log('Converting video file '+videoDirectory+' to image files in directory ' +
                            jpegFileDirectory+'');


                        return  'mplayer -ao null ' + videoDirectory + ' -vo jpeg:outdir=' + jpegFileDirectory;
                    }
                    else {
                        return 'echo "ERROR: Missing video directory or output directory."';
                    }
                },
                options:{
                    stdout:false
                }

            },

            jpegToGif:{
               command:function(imagesDirectory,gifOutPutFileName){


                   if(imagesDirectory && gifOutPutFileName){

                       console.log('Converting images in directory '+imagesDirectory+' to gif file named '+
                           gifOutPutFileName+'.');

                       return 'convert '+imagesDirectory+' '+gifOutPutFileName;

                   }
                   else{
                      return 'echo "ERROR: Missing image directory or output file name parameters."';
                   }
               }
            },
            optimizeGif:{

                command:function(unOptimizedFileDirectory,optimizedFileDirectory){

                    if(unOptimizedFileDirectory && optimizedFileDirectory){

                        console.log('Optimizing gif '+unOptimizedFileDirectory+' to optimized file '+optimizedFileDirectory+'.');

                        return 'convert '+unOptimizedFileDirectory+' -fuzz 10% -layers Optimize '+optimizedFileDirectory;
                    }else{

                        return 'echo "ERROR: Missing file directory for un optimized files or output directory for optimized files."'
                    }
                }

            }

        }


    });


    //Runs shell commands within grunt
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('video-to-images', 'Task to convert a video to a list of images.',function(videoDirectory, imagesDirectory){

       grunt.task.run('shell:videoToJpeg:"'+videoDirectory+'":"'+imagesDirectory+'"');

    });

     grunt.registerTask('images-to-gif', 'Converts a list of images into a gif.',function(imagesDirectory,gifDirectory){

       grunt.task.run('shell:jpegToGif:"'+imagesDirectory+'":"'+gifDirectory+'"');

    });

    grunt.registerTask('optimize-gif', 'Optimizes a gif image.',function(unOptimizedGifDirectory,optimizedGifDirectory){

       grunt.task.run('shell:optimizeGif:"'+unOptimizedGifDirectory+'":"'+optimizedGifDirectory+'"');

    });

};