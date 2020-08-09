const path = require('path');

const ENTRY_DASHBOARD = {
    in: path.resolve(__dirname, './Source/DangerCount/index.tsx'),
    out: path.resolve(__dirname, './Distribution/DangerCount/')
};

const version = '5.0.0';

const config = {
    mode: 'production',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    entry: ['babel-polyfill', ENTRY_DASHBOARD.in ],
    output: {
        path: ENTRY_DASHBOARD.out,
        filename: 'protector.v'+version+'.js',
    },
    cache: false,
    devtool: false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
            },
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff',
			},
			{
				test: /\.(ttf|eot|svg|png|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader',
			}
        ]
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'moment': 'moment'
    }
};

module.exports = config;

