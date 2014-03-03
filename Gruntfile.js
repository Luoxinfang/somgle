module.exports = function (grunt) {
  'use strict'
  var sourceUrl = 'public', productUrl = 'dist';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: {
        src: [productUrl]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [
          {
            expand: true,
            cwd: sourceUrl + '/inc',
            src: ['*.html'],
            dest: productUrl + '/inc'
          }
        ]
      }
    },
    cssmin: {
      options: {
        report: 'gzip'
      },
      dist: {
        expand: true,
        cwd: sourceUrl,
        src: ['**/*.css'],
        dest: productUrl
      }
    },
    img: {
      task3: {
        src: sourceUrl + '/img/**/*.{png,jpg}',
        dest: productUrl + '/img'
      }
    },
    smushit: {
      group: {
        src: sourceUrl + '/img/**/*.{png,jpg,ico}',
        dest: productUrl + '/img'
      }
    },
    uglify: {
      options: {
        report: 'gzip',
        mangle: {
          except: ['require']//seajs
        }
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: sourceUrl + '/js',
            src: ['**/*.js'],
            dest: productUrl + '/js'
          }
        ]
      }
    },
    jst: {
      bulid: {
        files: [
          {
            expand: true,
            cwd: sourceUrl + '/tpl',
            src: ['**/*.{tpl,html}'],
            dest: productUrl + '/tpl',
            ext: '.js'
          }
        ]
      },
      options: {
        amd: true,
        namespace: false,
        prettify: true
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: sourceUrl + '/dist/templates',
        src: '**',
        dest: productUrl + '/templates',
        flatten: true,
        filter: 'isFile'
      }
    }
  });
  grunt.loadNpmTasks('grunt-img')
  grunt.loadNpmTasks('grunt-smushit')
  grunt.loadNpmTasks('grunt-contrib-jst')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-htmlmin')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('build', ['clean', 'uglify', 'cssmin' , 'htmlmin','jst', 'copy', 'smushit']);
};