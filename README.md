#About

This repo contains a grunt file and its dependencies that help in the conversion of videos to Gifs within a linux
environment. The tasks provide an abstraction on top of linux commands to reduce the number of needed configuration
options that a user needs to type, in order to complete a step within the video to gif conversion process.



#Full process for installing and converting a video to Gif on linux

1. Install shell command line dependencies.
2. Clone the github repo into a working directory.
3. Install node package dependencies.
4. Run grunt tasks in order to convert a video to gif.

    1. Capture and save a desktop video.
    2. Convert video to list of images.
    3. Convert list of images into gif.
    4. Optimize gif file.


## 1. Install shell command line dependencies.

The Grunt file requires a group of shell applications to be installed within the host Linux environment. All shell
dependencies must be installed in order to successfully convert a video to a gif by utilizing the Grunt file within this
repository.

The following are the four dependencies and an explication of what they are required for:

1. imagemagick
    * Used for converting a list of images into a gif.
2. mplayer
    * Used for converting a video file into a list of images.
3. gtk-recordmydesktop
    * Used for capturing a video of the screen that will eventually be turned into a gif.


###Installing Dependencies.

The required command line dependencies to run the tasks can be installed within Linux by running
the following command within a terminal:

   `sudo apt-get install imagemagick mplayer gtk-recordmydesktop`


The command will installed the required shell dependencies to convert videos into Gifs.


## 2. Clone the github repo into a working directory

In order to get to get the files within this repo into your working directory run the following command within
a terminal:

`git clone git@github.com:carlos-reynosa/video-to-gif-grunt-tasks.git`


## 3. Install node package dependencies

In order to run the video to gif tasks described by the grunt file, you need to install the required node dependencies by
running the following command:

`npm install --save-dev`

The command will install the required node dependencies within the directory where you cloned the repo.

## 4. Run grunt tasks in order to convert a video to gif.

### 1. Capture and save a desktop video with gtk-recordmydesktop

Use the **gtk-recordmydesktop** GUI tool to record a video of your desktop and save it. The video will
be used to be converted into a list of images and then a gif.


### 2. Convert video to list of images.

Use the **video-to-images** Grunt task to convert a video into a list of images. The task accepts two parameters, a path
to a video file and a path pointing to a directory where the list of images should be placed. The following is the syntax
for the **video-to-images** task:

`grunt video-to-images:<path to video>:<path to output directory>`


#### Example Task Usage

Lets assume that we have a video file named video.ogv. To convert the video file into a list of images
use the **video-to-images** Grunt task. In order to use the task we need two things, a path to the video and an output path.

Lets assume we have the following directories:

* Path to Video
    - ./video/video.ogv

* Path to Output Directory

    - ./images/

To convert the video file  **./video/video.ogv** into a list of images within **./images/**, use the following command:

`grunt video-to-images:./video/video.ogv:./images/`

A list of images should be generated within the directory **./images**. Those images can then be used to generate
a gif file.

### 3. Convert list of images into gif.

Use the **images-to-gif** Grunt task to convert a list of images into a gif file. The task accepts two parameters, a path to
a directory containing a list of images and path to an output file. The following  is the syntax for the **images-to-gif**
task:

`grunt images-to-gif:<path to list of images>:<path to output gif file>`


#### Example Task Usage

Lets assume we have a directory **./images** containing a list of images generated from a video file. To convert the list of
images into a Gif file use the **images-to-gif** grunt task. In order to use the task we need two things, a path that points
to a list of images and a path to the produced gif file.

Lets assume we have the following path where a list of images are located and a known path containing the name of the
gif file that should be generated:

* Path to List of Images

    - ./images/*
* Path to Output Gif File

    - ./gifFile/video.gif

To convert the list of images **./images/*** into the Gif file **./gifFile/video.gif**, use the following command:

`grunt images-to-gif:./images/*:./gifFile/video.gif`

The directory **./gifFile/** should now contain a Gif file representing the list of images in **./images/***.

### 4. Optimize gif file.

Use the **optimize-gif** Grunt task to optimize an existing gif file and reduce its size. The task accepts two parameters, a path to a gif file
and a path to where the optimized gif should be generated. The following is the syntax for the **optimize-gif** task:

`grunt optimize-gif:<path to un-optimized gif file>:<path to optimized gif file>`


#### Example Task Usage

Lets assume we have the file **./gifFile/video.gif** that we would like to generate into an optimized Gif file **./optimizedGif/video-optimized.gif**.
In order to use the Grunt task **optimize-gif** to optimize the file **./gifFile/video.gif** we need to things, a path to the
original un-optimized Gif file and a path to the Gif file that should be generated.

Lets assume we have the following paths to an un-optimized Gif file and path to a desired optimized Gif file:

* Path to Un-Optimized Gif File
    - ./gifFile/video.gif
* Path to Optimized Gif File
    - ./optimizedGif/video-optimized.gif

To optimize a gif file by using the above files, use the following command:

`grunt optimize-gif:./gifFile/video.gif:./optimizedGif/video-optimized.gif`

The new optimized gif file should be located within **./optizedGif/video-optimized.gif**.

#License

MIT