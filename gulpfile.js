'use strict';

// requires
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


//gulp
// gulp.task is a function used on the command line. In this case we would type gulp sass as sass is the name of the gulp command. It will execute the anonymous function.
/* ================ NOTE we don't have to run gulp sass anymore as the gulp watch takes care of compiling our .scss files into .css files automatically when we save that file. Awesome!!! === */
// This means that you should have 2 command line terminals opened when working with .scss one that you run gulp watch and another that runs node server.js
gulp.task('sass', function () {

	// gulp.src is the path to where our sass files are located. For this project they are in app/public/sass and the origin of this path is the gulpfile.js file which is in our root directory.
	// the **/* matches any file in the directory and any child directories. This lets us have multiple .scss files for different modules/views in diefferent directories and it will compile to one .css file! This allows us to work on separate .scss files and not overide each other!
	// HOW DO I NAME THE FILES AND WHERE DO I PUT THEM? 
	// Only thing you HAVE TO DO is save your .scss files with an _ before the file name. So if you're working on a css file for forms, you would call it _forms.scss and save it to the sass folder. You would then open the main.scss file in the sass folder and add @import 'form'; and you're good to go!
	gulp.src('app/public/sass/**/*.scss')

    	.pipe(sass().on('error', sass.logError))

    	// gulp.dest is the destination directory for the css files we declare in the header of handlebars. We've directed our html to look in the public/css direcotry for css files, so that is where gulp will place our automatically created css files. Thanks Gulp!
    	.pipe(gulp.dest('app/public/css'))

    	/* ========= Not yet working =========== */
    	// browser sync so that the browser automatically reloads when we save a .scss file. See more deatils below inteh gulp and browserSync section    	
    	// .pipe(browserSync.reload({
    	// 	stream: true
    	// }));

});

// this gulp task is run also in the command line as gulp watch and what it does is compiles a css file each time we save a .scss file. It allows us to not have to run gulp sass each time a .scss file is saved. It does it for us!!! Again, thanks Gulp! Gulp reallly does some heavy lifting.
gulp.task('watch', /*['browserSync', 'sass'],*/ function() {

	// gulp.watch is the directory path and the types of files to watch for. In this case .scss files
    gulp.watch('app/public/sass/**/*.scss',['sass']);
    
});


/* =================================== I haven't been able to get browserSync to work yet. Need to ask Sean and co. about it to see how to configure with out server.js file ===================== */

// gulp and browserSync
// again this would be run on the command line with gulp browserSync and is used so that whenever we save our .scss files the browser automatically refreshes. Yup, that means we don't have to run node server.js each time as we need the command line to have gulp watch for saves to our .scss files too compile them to .css files. Dude, Gulp is freaking amazing. How have we not been using it earlier?!?!?!?!?!
// gulp.task('browserSync', function() {
// 	browserSync.init({
//     	port: 8000,
//         proxy: {
//             target: "localhost:8000",
//             ws: true
//         }
//   	});
// });