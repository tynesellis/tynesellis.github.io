module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      all: ['admin/*.js', 'blog/scripts/*.js', 'contact/*.js', 'projects/*.js', 'resume/*.js',]
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['uglify', 'eslint'],
        options: {
          spawn: false,
        },
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: [{
          expand: true,
          cwd: 'admin',
          src: '*.js',
          dest: 'build',
          ext: '.min.js'
        },{
          expand: true,
          cwd: 'blog/scripts',
          src: '*.js',
          dest: 'build',
          ext: '.min.js'
        },{
          expand: true,
          cwd: 'contact',
          src: '*.js',
          dest: 'build',
          ext: '.min.js'
        },{
          expand: true,
          cwd: 'projects',
          src: '*.js',
          dest: 'build',
          ext: '.min.js'
        },{
          expand: true,
          cwd: 'resume',
          src: '*.js',
          dest: 'build',
          ext: '.min.js'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('eslint-grunt');
  grunt.loadNpmTasks("gruntify-eslint");


  // Default task(s).
  grunt.registerTask('default', ['uglify', 'watch', 'eslint']);

};