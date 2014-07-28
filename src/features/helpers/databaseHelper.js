(function(){
    "use strict";

    var connection;

    exports.ensureDataBaseIsFilledWithSampleData = function(){
        var mysql      = require('mysql');
        connection = mysql.createConnection("mysql://root:password@10.0.0.3:3307/ToDoList?reconnect=true");

        connection.connect(function(err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
        });

        tableExists();
    };

    function tableExists(){
        var queryText = "show tables like 'ToDoItems'";
        connection.query(queryText, function(err, rows, fields){
            if (rows.length == 1 ) {
                emptyTable();
            }
            else{
                createTable();
            }
        });
    };


    function emptyTable() {
        var queryText = "delete from ToDoItems";
        connection.query(queryText, function(err, rows, field){
            if(!err){
                fillTableWithSampleData();
            }
            else{
                console.log(err);
            }
        });
    }

    function createTable(){
        var queryText = "CREATE TABLE 'ToDoItems' (" +
            "'idToDoItems' int(11) NOT NULL AUTO_INCREMENT," +
            "'Title' varchar(256) NOT NULL," +
            "PRIMARY KEY ('idToDoItems')" +
            ") ENGINE=InnoDB AUTO_INCREMENT=192 DEFAULT CHARSET=utf8";

        connection.query(queryText, function(err, rows, field){
            if(!err){
                fillTableWithSampleData();
            }
        });
    }

    function fillTableWithSampleData(){
        for ( var i = 0; i < 10; i++){
            var queryText = "INSERT INTO ToDoItems (Title) values ('ToDo Item number " + i + "')";
            connection.query(queryText, function(err, rows, field){
                if(!err){
                    connection.end(function(err){});
                }
            });
        }
    }
}());