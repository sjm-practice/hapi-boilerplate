'use strict';

// Dependencies...
var Hapi = require('hapi');

// Create server, and set port
var server = new Hapi.Server();
server.connection({
    port: 3000
});

// Set view engine and folder
server.views({
    engines: {
        html: require('swig')
    },
    path: './server/views'
});

// Export the server to be required elsewhere.
module.exports = server;

// Load all plugins, then start the server. Community / NPM 
// plugins are loaded first, then project specific plugins. 
server.register([
    {
        register: require('./server/routes/index.js')
    }
], function() {
    // Start the server
    server.start(function() {
        console.log('Server started at:', server.info.uri);
    });
});
