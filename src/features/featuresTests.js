(function(){
    "use strict";

    var child_process = require("child_process"),
        serverProcess;

    exports.testShouldSeeTheToDoItemsThatAreInTheDatabase = function(test){

        //1.- Fill database with data (recreate database or tables if needed)
        var databaseHelper = require('./helpers/databaseHelper');
        databaseHelper.ensureDataBaseIsFilledWithSampleData();

        //2.- Start node server
        startServer(test.done);

        var casperJsProcess = child_process.spawn("./node_modules/.bin/casperjs", [ "test", "./src/features/shouldShowToDoItems.js" ], {
            stdio: "inherit",
            env: { "PHANTOMJS_EXECUTABLE": "./node_modules/phantomjs/lib/phantom/bin/phantomjs" }
        });
        casperJsProcess.on("exit", function(code) {
            test.equals(code, 0, "CasperJS test failures");
            test.done();
        });
    };

    function startServer(done) {
        launchProcess();
        waitForServerToBeReady(done);

        function launchProcess() {
            serverProcess = child_process.spawn("node", ["./src/runServer.js"], { stdio: ["pipe", "pipe", process.stderr] });
        }

        function waitForServerToBeReady(callback) {
            var stdout = "";
            serverProcess.stdout.setEncoding("utf8");
            serverProcess.stdout.on("data", function(chunk) {
                if (stdout !== null) stdout += chunk;
                if (stdout.trim() === "Server started") callback();
            });
        }
    }
}());