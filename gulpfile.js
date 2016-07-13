'use strict';

// requires
var gulp = require('gulp');
var sass = require('gulp-sass');


//gulp
// gulp.task is a function to be used on the command line. In this case we would rug gulp sass as sass is the name of the gulp command. It will execute the anonymous function.
gulp.task('sass', function () {
	// the gulp.src is the path to where our sass files are located. For this project they are in app/public/sass and the origin of this path is the gulpfile.js file which is in our root directory.
	// the **/* matches any file in the directory and any child directories. This lets us have multiple .scss files for different modules/vies and it will compile to one .css file! Allows us to work on separate .scss files and not overide each other!
	gulp.src('app/public/sass/**/*.scss')
    	.pipe(sass().on('error', sass.logError))
    	// gulp.dest is the destination directory for the css files we declare in the header of handlebars. We've directed our html to look in the public/css direcotry for css files, so that is where gulp will place our automatically created css files. Thanks Gulp!
    	.pipe(gulp.dest('app/public/css'));
});

// this gulp task is run also in the command line as gulp watch and what it does is compiles a css file each time we save a .scss file. It allows us to not have to run gulp sass each time a .scss file is save. Again, thanks Gulp! Gulp reallly does some heavy lifting.
gulp.task('watch',function() {
	// gulp.watch is the directory path and the types of files to watch for. In this case .scss files
    gulp.watch('app/public/sass/**/*.scss',['sass']);
});