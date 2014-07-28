(function() {
    "use strict";
    var server = require("./server/server.js");

    var port = 8090;

    server.start(port, function() {
        console.log("Server started");
    });
}());