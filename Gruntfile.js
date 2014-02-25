/*global module:false*/
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		env: {
			options: {
				REVISION: '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss o") %>'
			},
			dev: {
				ENV: 'DEVELOPMENT'
			},
			prod: {
				ENV: 'PRODUCTION'
			},
			aeg: {
				ENV: 'PRODUCTION',
				SHOWLOGO: true
			}
		},
		clean: {
			dist: [
				'dist/'
			]
		},
		concat: {
			options: {
				stripBanners: true
			},

			vendor: {
				src: [
					'src/lib/jquery.min.js',
					'src/lib/jquery.cookie.js',
					'src/lib/json2.js'
				],
				dest: 'dist/scripts/lib.js'
			},
			app: {
				src: [
					'src/js/functions.js',
					'src/js/strings.js',
					'src/js/objects.js',
					'src/js/init.js',
					'src/js/conditions.js',
					'src/js/misccards.js',
					'src/js/monstercards.js',
					'src/js/herocards.js',
					'src/js/villagecards.js',
					'src/js/execute.js'
				],
				dest: 'dist/scripts/app.js'
			}
		},
		uglify: {
			options: {
			},
			app: {
				src: 'dist/scripts/app.js',
				dest: 'dist/scripts/app.min.js'
			}
		},
		cssmin: {
			options: {
				noAdvanced: true
			},
			style: {
				src: [
					'src/style.css'
				],
				dest: 'dist/style.min.css'
			}
		},
		preprocess: {
			index: {
				src: 'src/index.html',
				dest: 'dist/index.html'
			},
			manifest: {
				src: 'src/resources/manifest.js',
				dest: 'dist/manifest.manifest'
			}
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				}
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			src: {
				src: ['src/js/*.js']
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'flag/', src: ['us.png','de.png','fr.png'], dest: 'dist/images/flag/'},
					{expand: true, cwd: 'src/images/', src: ['*'], dest: 'dist/images/'},
					{expand: true, cwd: 'src/resources/', src: ['.htaccess','web.config'], dest: 'dist/'},
					{expand: true, cwd: 'src/', src: ['style.css'], dest: 'dist/'},
				]
			}
		},
		watch: {
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['jshint:gruntfile']
			},
			app: {
				files: 'src/**/*.*',
				tasks: ['env:dev', 'build'],
				options: {
					livereload: true
				}
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-preprocess');

	// Default task.
	grunt.registerTask('build', ['concat', 'uglify', 'cssmin', 'preprocess:index', 'copy']);
	grunt.registerTask('prod', ['env:prod', 'clean', 'build', 'preprocess:manifest']);
	grunt.registerTask('aeg', ['env:aeg', 'clean', 'build', 'preprocess:manifest']);
	grunt.registerTask('dev', ['env:dev', 'clean', 'build']);
	grunt.registerTask('run', ['dev', 'watch']);
	grunt.registerTask('default', ['dev']);

};
