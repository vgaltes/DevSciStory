(function(){
    "use strict";

    casper.test.setUp(function(done){

        done();
    });

    casper.test.begin("simple test", function(test){
        casper.start("http://localhost:8090");
        test.assertTitle("Angular ToDo List", "The title is not the one expected");

        casper.waitForSelector('#todoItemsList', function() {
            test.assertEval(function() {
                return __utils__.findAll(".todoItem").length == 10;
            }, "There aren't 10 results");

        });

        casper.run(function()
        {
            test.done();
        });
    });


    //3.- Navigate to server URL using casperjs
    //4.- Assert we have the items in the database

}());