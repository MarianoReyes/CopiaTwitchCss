export default {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: 'dist',
        },
        compress:true,
        port: 9000,
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                use: [{loader : 'babel-loader'}],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif|mp3|ttf)$/,
                use: [{loader: 'file-loader'}]
            },
            {
                test: /\.(svg)$/,
                use: ['@svgr/webpack']
            },        
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
}