var Hapi = require('hapi');

var server = new Hapi.Server(8080, "localhost");

server.route({
    path: '/favicon.ico',
    method: 'GET',
    handler: {
        file: './app/favicon.ico'
    }
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        file: './app/index.html'
    }
});

server.route({
    path: '/static/{path*}',
    method: 'GET',
    handler: {
        directory: {
            path: './app',
            listing: false,
            index: false
        }
    }
});
server.route({
    path: '/partials/{path*}',
    method: 'GET',
    handler: {
        directory: {
            path: './app/partials',
            listing: false,
            index: false
        }
    }
});

server.route({
    path: '/*',
    method: 'GET',
    handler: function(request, reply) {
        reply.redirect('/#' + request.url);
    }
});

server.start(function() {
    console.log("server started @ " + server.info.uri);
});
