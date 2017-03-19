/*
*	grunt对外的接口管理
*@	读取pageage.json信息
*@	插件加载、注册任务、运行任务。
*/

module.exports = function(grunt){
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    watch: {
	    	jade: {
	        	files: ['app/views/**','app/views/**/*.jade'],
	        	options: {
	        	  livereload: true
	        	}
	      	},
	      	js: {
	        	files: ['public/javascripts/**', 'models/**/*.js', 'schemas/**/*.js'],
	        	//tasks: ['jshint'],
	        	options: {
	        	  livereload: true
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

	    concurrent: {
	    	tasks: ['nodemon', 'watch'],
	    	options: {
	        	logConcurrentOutput: true
			}
	    }
	})

	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-nodemon')
	grunt.loadNpmTasks('grunt-concurrent')

	grunt.option('force', true)
	grunt.registerTask('default', ['concurrent'])
}