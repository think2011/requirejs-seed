require.config({
    baseUrl: './js',
    paths  : {},
    shim   : {
        'dragula': ['css!lib/dragula/dragula.min.css']
    },
    map    : {
        '*': {
            'css': 'lib/css.min'
        }
    }
})


require([], function () {
})