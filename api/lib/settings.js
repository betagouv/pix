const path = require('path');

module.exports = (function () {

    const config = {

        rootPath: path.normalize(__dirname + '/..'),

        port: parseInt(process.env.PORT, 10) || 3000,

        environment: process.env.NODE_ENV || 'development',

        hapi: {
            options: {}
        },

        airtable: {
            apiKey: 'keyEgu8JYhXaOhjbd',
            base: 'appHAIFk9u1qqglhX'
        },

        mailjet: {
            apiKey: '7efe76a3fd5a487b7bf20a3688750666',
            apiSecret: 'c932bbba9429c842c318f790cc82b0e0'
        }
    };

    if (process.env.NODE_ENV === 'test') {
        config.port = null;

        config.airtable = {
            apiKey: 'test-api-key',
            base: 'test-base'
        };

        mailjet: {
            apiKey: 'test-api-ket',
            apiSecret: 'test-api-secret'
        };
    }

    return config;

})();
