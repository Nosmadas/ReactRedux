module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js', //this is the default name, so you can skip it
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders:[ 'react-hot', 'jsx-loader?insertPragma=React.DOM&harmony' ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}