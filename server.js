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
        register: require('good'),
        options: {
            opsInterval: 60000,
            reporters: [{
                reporter: require('good-console'),
                events: { log: '*', request: '*', response: '*', error: '*' }
            },
            {
                reporter: require('good-file'),
                events: { ops: '*', error: '*' },
                config: {
                    path: './server/logs/',
                    rotate: 'daily'
                }
            }]
        }        
    },
    {
        register: require('hapi-named-routes')
    },
    {
        register: require('./server/controllers/index.js')
    },
    {
        register: require('./server/assets/index.js')
    }
], function(err) {

    if (err) {
        console.error(err); 
    } else {
        // Start the server
        server.start(function() {
            console.log('Server started at:', server.info.uri);
        });        
    }
});
