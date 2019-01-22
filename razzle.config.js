'use strict'

module.exports = {
    modify(config, {target, dev}, webpack) {
        const appConfig = { ...config};
        // console.log(appConfig.module.rules[4]);
        // console.log(appConfig.output.publicPath);

        appConfig.module.rules[4] = {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
                limit: 5000,
                name: 'static/media/[name].[hash:8].[ext]',
            },
        }

        const csvRe = /\.csv$/;
        appConfig.module.rules[3].exclude.push(csvRe)
        appConfig.module.rules.push({
            test: csvRe,
            use: require.resolve('raw-loader')
        })

        return appConfig;
    }
}
