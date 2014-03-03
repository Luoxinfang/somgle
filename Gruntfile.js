module.exports = function (grunt) {
  'use strict'
  var sourceUrl = '/public', productUrl = '/dist';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      clean: [productUrl]
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
            cwd: sourceUrl,
            src: ['*.html'],
            dest: productUrl
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
      task1: {
        src: sourceUrl + '/images/*.{png,jpg}',
        dest: productUrl + '/images/'
      },
      task2: {
        src: sourceUrl + '/images/betslip/*.{png,jpg}',
        dest: productUrl + '/images/betslip'
      },
      task3: {
        src: sourceUrl + '/images/datetimepicker/*.{png,jpg}',
        dest: productUrl + '/images/datetimepicker'
      }
    },
    uglify: {
      options: {
        report: 'gzip',
        mangle: {
          except: ['require']//seajs module must use this keyword
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
            cwd: sourceUrl + '/templates',
            src: ['**/*.tpl'],
            dest: productUrl + '/templates',
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
  //HTML
  grunt.loadNpmTasks('grunt-contrib-htmlmin')
  //CSS
  grunt.loadNpmTasks('grunt-contrib-csslint')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  //JAVASCRIPT
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  /**
   * https://github.com/heldr/grunt-img
   * image compress
   */
  grunt.loadNpmTasks('grunt-img')
  //TEMPLATE
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //CONTRIB
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('build', ['uglify', 'cssmin' , 'htmlmin', 'jst', 'copy', 'img']);
};