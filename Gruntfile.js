module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: [{
                    expand: true,
                    cwd: 'bem/',  // Diretório de origem
                    src: ['*.less'],  // Todos os arquivos .less
                    dest: 'dev/styles/',  // Diretório de destino
                    ext: '.css'  // Extensão dos arquivos gerados
                }]
            },
            production: {
                options: {
                    compress: true,
                },
                files: [{
                    expand: true,
                    cwd: 'bem/',
                    src: ['*.less'],
                    dest: 'dist/styles/',
                    ext: '.min.css'
                }]
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less']);
}