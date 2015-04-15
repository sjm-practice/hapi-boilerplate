'use strict';

// assets to be used by the 'hapi-assets' module, based on process.env.NODE_ENV
module.exports = {
    development: {
        js: ['js/bootstrap.js'],
        css: ['css/bootstrap.css', 'css/main.css']
    },
    production: {
        js: ['js/scripts.js'],
        css: ['css/styles.css']
    }
};