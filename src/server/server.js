/*global exports, require */
(function () {
    "use strict";

    var express = require('express'),
        http = require('http');

    var app = express(),
              server;

    exports.start = function(contentDir, port){

        app.use(express.static(contentDir));

        server = http.createServer(app).listen(port, function () {
            console.log('Listening on port ' + port);
        });
    };

    exports.end = function(){
        server.close();
    };
}());