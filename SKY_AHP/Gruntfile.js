'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('assemble');



  grunt.initConfig({
    config: {
      src: 'app',
      dist: 'dist',
      assets: 'app/assets'
    },

    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5,
        title: 'Project Name',
        success: true,
        duration: 3
      }
    },

    sass: {
      options: {
        includePaths: ['<%= config.assets %>/js/lib/foundation-sites/scss', '<%= config.assets %>/js/lib/motion-ui/src', '<%= config.assets %>/js/lib/slick-carousel/slick']
      },
      dist: {
        options: {
          sourceMap: true,
          outputStyle: 'extended'
        },
        files: {
          '<%= config.assets %>/css/app.css': '<%= config.assets %>/scss/app.scss'
        }
      }
    },

    notify: {
      sass: {
        options: {
          title: 'Entegris UI',
          message: 'Sass task is complete.'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 4 versions'})
        ]
      },
      dist: {
        src: '<%= config.assets %>/css/app.css'
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        '<%= config.assets %>/js/**/*.js',
        '!<%= config.assets %>/js/lib/**',
        '!<%= config.assets %>/js/foundation.min.js',
        '!<%= config.assets %>/js/components/acc.*.js',
        '!<%= config.assets %>/js/components/findAndReplaceDOMText.js',
        '!<%= config.assets %>/js/ouical/ouical.js',
        '!<%= config.assets %>/js/components/typeahead.bundle.min.js'
      ]
    },

    scsslint: {
      allFiles: [
        '<%= config.assets %>/scss/**/*.scss',
      ],
      options: {
        bundleExec: false,
        config: '.scss-lint.yml',
        reporterOutput: 'null',
        colorizeOutput: true
      },
    },

    clean: {
      dist: {
        src: ['<%= config.dist %>/*']
      },
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd:'<%= config.assets %>/',
          src: ['fonts/**', 'images/**', 'js/**', 'css/**', '!**/*.scss'],
          dest: '<%= config.dist %>/assets/'
        }]
      },
      css: {
        files: [{
          expand: true,
          cwd: '<%= config.assets %>',
          src: 'css/**',
          dest: '<%= config.dist %>/assets/'
        }]
      },
      js: {
        files: [{
          expand: true,
          cwd: '<%= config.assets %>',
          src: 'js/**',
          dest: '<%= config.dist %>/assets/'
        }]
      },
      robots: {
        files: [{
          expand: true,
          cwd: '<%= config.assets %>',
          src: 'misc/robots.txt',
          dest: '<%= config.dist %>/'
          }]
      }
    },

    imagemin: {
      target: {
        files: [{
          expand: true,
          cwd: '<%= config.assets %>/images/',
          src: ['**/*.{jpg,gif,svg,jpeg,png}'],
          dest: '<%= config.dist %>/assets/images/'
        }]
      }
    },

    uglify: {
      options: {
        preserveComments: 'some',
        mangle: false
      }
    },

    useminPrepare: {
      html: ['<%= config.assets %>/index.html'],
      options: {
        dest: '<%= config.dist %>'
      }
    },

    usemin: {
      html: ['<%= config.dist %>/**/*.html', '!<%= config.assets %>/js/lib/**'],
      css: ['<%= config.dist %>/css/**/*.css'],
      options: {
        dirs: ['<%= config.dist %>']
      }
    },

    watch: {
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['sass', 'postcss']
      },
      assemble: {
        files: [
          '<%= config.src %>/data/**/*.json',
          '<%= config.src %>/templates/**/*.hbs',
          '<%= config.src %>/assets/css/**/*.css',
          '<%= config.src %>/assets/css/**/*.scss',
          '<%= config.src %>/assets/js/**/*.js'
        ],

        tasks: ['assemble']
      },
      sass: {
        files: '<%= config.assets %>/scss/**/*.scss',
        tasks: ['sass', 'postcss', 'copy:css', 'notify:sass']
      },
      js: {
        files: '<%= config.src %>/assets/js/**/*.js',
        tasks: ['copy:js']
      },
      liveBuild: {
        files: [
          '<%= config.src %>/**/*.html',
          '!<%= config.src %>/assets/js/lib/**',
          '<%= config.src %>/assets/js/**/*.js',
          '<%= config.assets %>/scss/**/*.scss',
          '<%= config.src %>/assets/images/**/*.{jpg,gif,svg,jpeg,png}',
        ],
        tasks: ['build']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '<%= config.src %>/**/*.html',
          '!<%= config.src %>/assets/js/lib/**',
          '<%= config.src %>/assets/js/**/*.js',
          '<%= config.src %>/assets/css/**/*.css',
          '<%= config.src %>/assets/images/**/*.{jpg,gif,svg,jpeg,png}',
        ]
      }
    },


    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      options: {
        flatten: true,
        expand: true,
        assets: '<%= config.dist %>/assets',
        layout: '<%= config.src %>/templates/layouts/default.hbs',
        data: '<%= config.src %>/data/*.{json,yml}',
        partials: '<%= config.src %>/templates/partials/**/*.hbs',
        plugins: ['assemble-contrib-permalinks', 'assemble-contrib-sitemap'],
        helpers: ['<%= config.src %>/helpers/*.js']
      },
      site: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/templates/pages',
            src: ['**/*.hbs'],
            dest: '<%= config.dist %>/',
            ext: '.html'
          }
        ]
      }
    },

  });

  grunt.registerTask('compile-sass', [
    'sass',
    'postcss'
  ]);
  grunt.registerTask('build', [
    'clean:dist',
    'assemble',
    'compile-sass',
    'copy:dist'
  ]);
  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);
  grunt.registerTask('watchLB', [
    'watch:liveBuild'
  ]);
  grunt.registerTask('validate-js', [
    'jshint'
  ]);
  grunt.registerTask('validate-css', [
    'scsslint'
    ]);
  grunt.registerTask('image-minification', [
    'newer:imagemin',
    ]);
  grunt.registerTask('default', [
    'build',
    'validate-js',
    'scsslint',
    'copy:dist',
    'image-minification',
    // 'cssmin',
    // 'uglify', //this is causing a problem with the postcss and removing webkit prefixes
    'usemin'
  ]);

};
