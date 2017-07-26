//配置api 资料 ：https://doc.webpack-china.org/configuration/dev-server/ 
const CopyWebpackPlugin = require('copy-webpack-plugin'); //拷贝资源插件
const devServer = require('./webpack/devserver'); // 用于快速开发应用程序
// const loaders = require('./webpack/loaders');
const webpack = require('webpack');
const distPath = "/dist/";

module.exports = (webpackConfig) => {
    let retVal = Object.assign({}, webpackConfig, {
        // 起点或是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行。
        entry: {
            index: './src/modules/index/index.tsx'
        },
        //防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。
        //例如，React 和 react-dom不打包到bundle中
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
        },
        devServer: devServer
    });

    // 拷贝资源到指定目录下
    retVal.plugins.push(new CopyWebpackPlugin([
        // { from: './src/modelproxy/mocks', to: 'mocks' },
        { from: './src/assets', to: 'assets' },
        { from: './src/componentsdemo/assets', to: 'assets' }
    ]));
    // 环境
    //通过DefinePlugin可以定义一些全局的变量，我们可以在模块当中直接使用这些变量，无需作任何声明，看一个简单的webpack配置
    retVal.plugins.push(new webpack.DefinePlugin({
        __DEV__: JSON.stringify(!process.env.NODE_ENV || process.env.NODE_ENV === 'dev'),
        __TEST__: JSON.stringify(process.env.NODE_ENV === 'uat1'),
        __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
        __STAG__: JSON.stringify(process.env.NODE_ENV === 'stg'),
    }));

    retVal.output.publicPath = '/';

    return retVal;
};