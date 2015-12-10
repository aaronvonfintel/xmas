module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      build: {
               files: {
                   'css/framework.css': 'assets/sass/framework.scss'
               }
           }
    },

    watch: {
      css: {
        files: ['assets/sass/**/*.scss'],
        tasks: ['sass']
      }
    }

  });



  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch', 'sass']);
  //grunt.registerTask('default',  ['sass']);

};
