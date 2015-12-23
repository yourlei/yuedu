"use strict"
module.exports = function (grunt) {
	// require('load-grunt-tasks')(grunt);
	// require('time-grunt')(grunt);

	var config = {
		app: 'app',
		dist: 'public'
	};

	grunt.initConfig({
		watch: {
			jade: {
			  files: ['app/views/**'],
			  tasks: ['jade'],
			  options: {
			    livereload: true
			  }
			},
		  js: {
		    files: ['app/**/*.js','public/js/*.js'],
		    // allWithDefaultOptions: ['app/**/*.js', 'public/js/*.js']
		    tasks: ['jshint'],
		    options: {
		      livereload: true
		    }
		  },
		  uglify: {
		    files: ['app/**/*.js', 'public/js/*.js'],
		    tasks: ['jshint'],
		    options: {
		      livereload: true
		    }
		  },
		  styles: {
		    files: 'public/**/*.scss',
		    tasks: ['sass'],
		    options: {
		      nospawn: true
		    }
		  }

		},
		// jade: {
		//   compile: {
		//     options: {
		//       data: {}
		//     },
		//     files: [{
		//       expand: true,
		//       cwd: 'source',
		//       src: [ 'app/**/*.jade' ],
		//       dest: 'build',
		//       ext: '.html'
		//     }]
		//   }
		// },
		jshint: {
			all: ['public/js/*.js', 'test/**/*.js', 'app/**/*.js'],
		  options: {
		    // jshintrc: '.jshintrc',
		    ignores: ['public/libs/**/*.js']
		  }
		},

		// less: {
		//   development: {
		//     options: {
		//       compress: true,
		//       yuicompress: true,
		//       optimization: 2
		//     },
		//     files: {
		//       'public/build/index.css': 'public/less/index.less'
		//     }
		//   }
		// },
		sass: {
	    dist: {
	      files: [{
	        expand: true,
	        cwd: 'public/sass',
	        src: ['*.scss'],
	        dest: 'public/style',
	        ext: '.css'
	      }]
	    }
	  },

		uglify: {
		  development: {
		    files: {
		      // 'public/build/admin.min.js': 'public/js/admin.js',
		      // 'public/build/detail.min.js': [
		      //   'public/js/detail.js'
		     // ]
		    }
		  }
		},

		nodemon: {
		  dev: {
		    options: {
		      file: 'app.js',
		      args: [],
		      ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
		      watchedExtensions: ['js'],
		      watchedFolders: ['./'],
		      debug: true,
		      delayTime: 1,
		      env: {
		        PORT: 3000
		      },
		      cwd: __dirname
		    }
		  }
		},

		mochaTest: {
		  options: {
		    reporter: 'spec'
		  },
		  src: ['test/**/*.js']
		},

		concurrent: {
		  tasks: ['nodemon', 'watch', 'sass', 'uglify', 'jshint'],
		  options: {
		    logConcurrentOutput: true
		  }
		},
	});


	grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-nodemon')
  grunt.loadNpmTasks('grunt-concurrent')
  grunt.loadNpmTasks('grunt-mocha-test')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')

  grunt.option('force', true)

  grunt.registerTask('default', ['concurrent'])

  grunt.registerTask('test', ['mochaTest'])
};