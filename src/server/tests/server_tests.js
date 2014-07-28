/*global exports, require */
(function () {
    "use strict";

    var http = require("http"),
        server = require("../server"),
        fs = require("fs");

    var INDEX_HTML_CONTENT = "<html><body>This is index.html</body></html>",
        CONTENT_DIR = './src/server/tests/unitTestContent';

    exports.test_serverRespondsWithIndexHtmlToIndexPage = function(test){
        fs.writeFileSync(CONTENT_DIR + "/" + 'index.html', INDEX_HTML_CONTENT);

        server.start(CONTENT_DIR, 8085);
        http.get('http://localhost:8085', function(response){
            test.equals(200, response.statusCode, "status code");

            response.setEncoding("utf8");

            response.on('data', function (chunk) {
                test.equals(INDEX_HTML_CONTENT, chunk, "Bad response text. Expected " + INDEX_HTML_CONTENT + " and get " + chunk);

                server.end();
                test.done();
            });
        });
    };
}());