import babel from 'rollup-plugin-babel'

export default {
    input: 'src/index.js',
    output: {
        file: 'bundle.js',
        format: 'es'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}