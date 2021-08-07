module.exports = {
    devServer: {
        port: '8000', // 端口
        proxy: {
            '/api': {
                target: 'https://www.fastmock.site/mock/96c7b4b54f2d39384e68e4e84d6103da/article',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}